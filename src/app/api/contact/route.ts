export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!
    }
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER!,
    to: process.env.CONTACT_EMAIL!,
    subject: `Contact from ${name}`,
    replyTo: email,
    text: message
  });

  return NextResponse.json({ success: true });
}
