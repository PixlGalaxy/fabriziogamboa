const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Servir los archivos estáticos de React
app.use(express.static(path.join(__dirname, '../public')));

// Ruta para el formulario de contacto
app.post('/backend/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Configuración de Nodemailer (ajusta según tu proveedor de correo)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `Nuevo mensaje de contacto de ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: 'Mensaje enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
});

// Manejar todas las demás rutas y devolver el archivo index.html de React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor backend ejecutándose en el puerto ${PORT}`);
});
