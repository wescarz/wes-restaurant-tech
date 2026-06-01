import { NextResponse } from "next/server";
import { sendContactEmail, sendContactConfirmation } from "@/lib/resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot: if filled, silently succeed to fool bots
    if (body._hp) {
      return NextResponse.json({ success: true });
    }

    const { name, email, phone, company, message, type } = body as {
      name: string;
      email: string;
      phone?: string;
      company?: string;
      message: string;
      type: string;
    };

    if (!name || !email || !message || !type) {
      return NextResponse.json(
        { error: "Faltan campos requeridos: name, email, message, type" },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Email no válido" }, { status: 400 });
    }

    if (
      name.length > 100 ||
      email.length > 150 ||
      message.length > 2000 ||
      (phone && phone.length > 20) ||
      (company && company.length > 120)
    ) {
      return NextResponse.json({ error: "Campo demasiado largo" }, { status: 400 });
    }

    const result = await sendContactEmail({
      name,
      email,
      phone,
      company,
      message,
      type,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json({ error: "Error al enviar el email" }, { status: 500 });
    }

    await sendContactConfirmation(email, name);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
