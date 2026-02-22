import { NextResponse } from "next/server";
import { sendContactEmail, sendContactConfirmation } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
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
