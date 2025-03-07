// archivo: app/api/contact/route.js (o .ts si estás usando TypeScript)
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, projectDescription } = body;

    // Validación básica
    if (!name || !email || !projectDescription) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Configurar el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Puedes usar otros servicios como 'sendgrid', 'mailgun', etc.
      auth: {
        user: process.env.EMAIL_USER, // Guarda esto en variables de entorno
        pass: process.env.EMAIL_PASS, // Guarda esto en variables de entorno
      },
    });

    // Configurar el correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "contact.alaskatech@gmail.com",
      subject: `Nuevo contacto de ${name}`,
      text: 
        `Nombre: ${name}\n` +
        `Email: ${email}\n\n` +
        `Descripción del proyecto:\n${projectDescription}`,
      html: `
        <h2>Nuevo contacto desde el formulario web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Descripción del proyecto:</h3>
        <p>${projectDescription.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { error: "Error al enviar el formulario" },
      { status: 500 }
    );
  }
}