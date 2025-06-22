// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email configuration for Zoho Mail
// Make sure these environment variables are set in .env.local
// SMTP_HOST=smtp.zoho.com
// SMTP_PORT=587
// SMTP_USER=your-zoho-email@zohomail.com
// SMTP_PASS=your-zoho-app-password
// CONTACT_EMAIL=recipient-email@example.com

const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: 587, // Zoho requires port 587 for TLS
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  // Zoho specific settings
  tls: {
    rejectUnauthorized: false, // Only for development, consider proper certs in production
    ciphers: 'SSLv3'
  },
  debug: process.env.NODE_ENV === 'development', // Enable debug logging in development
  logger: process.env.NODE_ENV === 'development' // Log to console in development
};

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Input validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: "Please fill all fields" },
      { status: 400 }
    );
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid email address" },
      { status: 400 }
    );
  }

  // Check if required environment variables are set
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_EMAIL) {
    console.error('Missing email configuration. Please set up your .env.local file with SMTP settings.');
    return NextResponse.json(
      { 
        success: false, 
        message: "Server configuration error. Please try again later or contact the administrator." 
      },
      { status: 500 }
    );
  }

  // Create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport(smtpConfig);

  try {
    // Verify connection configuration
    await transporter.verify();
    
    // Send mail with defined transport object
    await transporter.sendMail({
      from: `"${process.env.SMTP_USER}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: `"${name}" <${email}>`,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        New message from your portfolio contact form:
        
        Name: ${name}
        Email: ${email}
        Date: ${new Date().toLocaleString()}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #2563eb;">
            <p style="margin: 0; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="margin-top: 20px; font-size: 0.9em; color: #64748b;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    // Log successful email sending
    console.log(`Email sent successfully to ${process.env.CONTACT_EMAIL}`);
    
    return NextResponse.json({ 
      success: true, 
      message: "Thank you for your message! I'll get back to you soon." 
    });

  } catch (error: unknown) {
    console.error('Error sending email:', error);
    
    // More specific error messages based on the error type
    let errorMessage = "Failed to send your message. Please try again later.";
    
    if (error && typeof error === 'object' && 'code' in error) {
      const errorCode = (error as { code?: string }).code;
      
      if (errorCode === 'EAUTH') {
        errorMessage = "Authentication failed. Please check your email server credentials.";
      } else if (errorCode === 'ECONNECTION') {
        errorMessage = "Could not connect to the email server. Please try again later.";
      } else if (errorCode === 'EENVELOPE') {
        errorMessage = "Invalid email address. Please check the recipient's email address.";
      }
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: errorMessage 
      },
      { status: 500 }
    );
  }
}
