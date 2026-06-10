import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "GO TREX Website <onboarding@resend.dev>",
      to: ["Youssef@abu-shama.com"],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #03091f; color: #ffffff; padding: 40px; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px; border-bottom: 1px solid rgba(201,162,39,0.3); padding-bottom: 20px;">
            <h1 style="color: #1d4ed8; font-size: 24px; margin: 0;">GO TREX for Export</h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 12px; margin-top: 4px;">New Contact Form Submission</p>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; color: rgba(255,255,255,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 120px;">Name</td><td style="padding: 10px 0; color: #fff;">${name}</td></tr>
            <tr><td style="padding: 10px 0; color: rgba(255,255,255,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</td><td style="padding: 10px 0; color: #fff;">${phone || "N/A"}</td></tr>
            <tr><td style="padding: 10px 0; color: rgba(255,255,255,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td><td style="padding: 10px 0; color: #1d4ed8;"><a href="mailto:${email}" style="color: #1d4ed8;">${email}</a></td></tr>
          </table>
          <div style="margin-top: 24px; background: rgba(255,255,255,0.05); border: 1px solid rgba(201,162,39,0.2); border-radius: 8px; padding: 20px;">
            <p style="color: rgba(255,255,255,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px;">Message</p>
            <p style="color: #fff; line-height: 1.7; margin: 0;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="color: rgba(255,255,255,0.3); font-size: 11px; text-align: center; margin-top: 30px;">Sent from abu-shama.com contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
