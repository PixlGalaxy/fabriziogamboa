require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Discord Bot Config
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages] });

const cooldownMap = new Map(); // IP Map To Prevent Spam

// Initialize Bot and Set Presence
client.once("ready", () => {
    console.log(`[Backend] Bot Online as ${client.user.tag}`);

    client.user.setPresence({
        status: "online",
        activities: [{ name: "fabriziogamboa.com", type: ActivityType.Listening }]
    });
});

client.login(process.env.DISCORD_BOT_TOKEN);

// Route For Contact Data
app.post("/api/contact", async (req, res) => {
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

        res.json({ success: "Message sent to Discord successfully!" });

    } catch (error) {
        console.error("[Backend] error sending message:", error);
        res.status(500).json({ error: "Failed to send message to Discord" });
    }
});

// Start Express Server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Backend] Backend running on http://localhost:${PORT}`);
});
