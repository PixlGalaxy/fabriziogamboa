require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Dicord Bot Config
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages] });

let lastActivity = Date.now();
const cooldownMap = new Map(); // IP Map To Prevent Spam
let statusTimeout = null; // Sleep Control Timer

// Status Updater
const updateBotStatus = (forceStatus = null) => {
    const elapsedTime = Date.now() - lastActivity;

    let newStatus, activityText;

    if (forceStatus === "online" || elapsedTime <= 10 * 60 * 1000) {
        newStatus = "online";
        activityText = "fabriziogamboa.com";
        console.log("[Backend] Bot is now ONLINE...");
    } else {
        newStatus = "idle";
        activityText = "Sleeping...";
        console.log("[Backend] Bot is now in SLEEP mode...");
    }

    client.user.setPresence({
        status: newStatus,
        activities: [{ name: activityText, type: ActivityType.Listening }]
    });
};

// Initialize Bot And Set It To "Sleeping"
client.once("ready", () => {
    console.log(`[Backend] Bot Online as ${client.user.tag}`);
    updateBotStatus("idle");
    setInterval(() => updateBotStatus(), 5 * 60 * 1000);
});

client.login(process.env.DISCORD_BOT_TOKEN);

// Rout For Contact Data
app.post("/backend/contact", async (req, res) => {
    const { name, email, message } = req.body;
    const userIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Anti-spam: Block IP For 10 Minutes If Message Was Already Sent
    if (cooldownMap.has(userIp)) {
        const lastRequestTime = cooldownMap.get(userIp);
        const elapsedTime = Date.now() - lastRequestTime;

        if (elapsedTime < 10 * 60 * 1000) {
            return res.status(429).json({ error: "You are sending messages too quickly. Try again later." });
        }
    }

    cooldownMap.set(userIp, Date.now()); // Register IP With Last Request

    try {
        const userId = process.env.DISCORD_USER_ID;
        const discordUser = await client.users.fetch(userId);

        if (!discordUser) {
            return res.status(500).json({ error: "Failed to fetch Discord user" });
        }

        const embed = {
            title: "New Contact Form Submission.",
            color: 0x87FF6A,
            fields: [
                { name: "Name", value: name, inline: false },
                { name: "Email", value: email, inline: false },
                { name: "Message", value: message, inline: false }
            ],
            timestamp: new Date()
        };

        await discordUser.send({ embeds: [embed] });
        console.log(`[Backend] Message sent to Discord: ${name} - ${email}`);

        lastActivity = Date.now(); 
        updateBotStatus("online");

        if (statusTimeout) clearTimeout(statusTimeout);
        statusTimeout = setTimeout(() => {
            updateBotStatus("idle");
        }, 10 * 60 * 1000);

        res.json({ success: "Message sent to Discord successfully!" });

    } catch (error) {
        console.error("[Backend] error sending message:", error);
        res.status(500).json({ error: "Failed to send message to Discord" });
    }
});

// Start Express Server
app.listen(PORT, () => {
    console.log(`[Backend] Backend running on http://localhost:${PORT}`);
});
