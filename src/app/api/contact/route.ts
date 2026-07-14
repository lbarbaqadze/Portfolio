import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (name.length > 100 || email.length > 254 || message.length > 5000) {
      return NextResponse.json(
        { error: "One or more fields are too long." },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const contactTo = process.env.CONTACT_TO_EMAIL ?? gmailUser;

    if (!gmailUser || !gmailAppPassword || !contactTo) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio" <${gmailUser}>`,
      to: contactTo,
      replyTo: {
        name: name.replaceAll('"', ""),
        address: email,
      },
      subject: `Portfolio · Message from ${name}`,
      text: [
        "New contact message",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: buildContactEmailHtml(name, email, message),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildContactEmailHtml(name: string, email: string, message: string) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background-color:#141414;border:1px solid #2a2a2a;border-radius:20px;overflow:hidden;">
          <tr>
            <td style="padding:28px 32px 24px;border-bottom:1px solid #2a2a2a;">
              <p style="margin:0 0 8px;font-size:11px;font-weight:500;letter-spacing:0.18em;text-transform:uppercase;color:#737373;">Portfolio</p>
              <h1 style="margin:0;font-size:24px;font-weight:700;line-height:1.2;color:#ffffff;">New contact message</h1>              
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:16px;">
                    <p style="margin:0 0 6px;font-size:11px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:#737373;">Name</p>
                    <p style="margin:0;font-size:16px;font-weight:500;color:#ffffff;">${safeName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:16px;">
                    <p style="margin:0 0 6px;font-size:11px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:#737373;">Email</p>
                    <p style="margin:0;font-size:16px;">
                      <a href="mailto:${safeEmail}" style="color:#ffffff;text-decoration:underline;">${safeEmail}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin:0 0 10px;font-size:11px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:#737373;">Message</p>
                    <div style="padding:16px 18px;background-color:#0a0a0a;border:1px solid #2a2a2a;border-radius:14px;">
                      <p style="margin:0;font-size:15px;line-height:1.7;color:#d4d4d4;">${safeMessage}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>         
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
