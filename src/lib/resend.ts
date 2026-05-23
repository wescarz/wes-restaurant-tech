import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  console.warn("RESEND_API_KEY is not set — contact emails will not be sent");
}

export const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const FROM_EMAIL = process.env.FROM_EMAIL ?? "whet studio <wes@whet.es>";

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  type: string;
}) {
  if (!resend) return { error: new Error("Resend not configured") };
  return resend.emails.send({
    from: FROM_EMAIL,
    to: process.env.CONTACT_EMAIL ?? "wes@whet.es",
    replyTo: data.email,
    subject: `[whet studio] Contacto: ${data.type} - ${data.name}`,
    html: `
      <h2>Nuevo contacto</h2>
      <p><strong>Nombre:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Teléfono:</strong> ${data.phone}</p>` : ""}
      ${data.company ? `<p><strong>Empresa:</strong> ${data.company}</p>` : ""}
      <p><strong>Tipo:</strong> ${data.type}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
    `,
  });
}

export async function sendContactConfirmation(to: string, name: string) {
  if (!resend) return { error: new Error("Resend not configured") };
  return resend.emails.send({
    from: FROM_EMAIL,
    to,
    subject: "Hemos recibido tu mensaje | whet studio",
    html: `
      <p>Hola ${name},</p>
      <p>Hemos recibido tu mensaje. Te responderemos en breve.</p>
      <p>— whet studio</p>
    `,
  });
}
