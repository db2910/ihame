import { NextRequest, NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const ADMIN_EMAIL = 'donkyleben@gmail.com';
// Use the Resend-provided sender for now; update to branded domain when available
const FROM_EMAIL = 'onboarding@resend.dev';

async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to,
      subject,
      html,
    }),
  });
  return res.ok;
}

function adminEmailHtml(form: any) {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f8f9fa; padding: 32px; border-radius: 16px; max-width: 600px; margin: auto;">
      <h2 style="color: #2875B4; margin-bottom: 8px;">New Inquiry from IHAME Website</h2>
      <p style="color: #333; font-size: 16px;">You have received a new request via the website form:</p>
      <table style="margin: 24px 0; width: 100%; border-collapse: collapse;">
        <tr><td style="font-weight: bold; color: #2875B4; padding: 8px 0;">Name:</td><td>${form.name}</td></tr>
        <tr><td style="font-weight: bold; color: #2875B4; padding: 8px 0;">Email:</td><td>${form.email}</td></tr>
        ${form.phone ? `<tr><td style="font-weight: bold; color: #2875B4; padding: 8px 0;">Phone:</td><td>${form.phone}</td></tr>` : ''}
        <tr><td style="font-weight: bold; color: #2875B4; padding: 8px 0;">Service:</td><td>${form.service || 'General Inquiry'}</td></tr>
        <tr><td style="font-weight: bold; color: #2875B4; padding: 8px 0;">Message:</td><td>${form.message}</td></tr>
      </table>
      <div style="margin-top: 32px; color: #888; font-size: 13px;">IHAME Logistics & Supply LTD | Website Form Notification</div>
    </div>
  `;
}

function userEmailHtml(form: any) {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f8f9fa; padding: 32px; border-radius: 16px; max-width: 600px; margin: auto;">
      <h2 style="color: #2875B4; margin-bottom: 8px;">Thank You for Contacting IHAME Logistics!</h2>
      <p style="color: #333; font-size: 16px;">Dear <strong>${form.name}</strong>,</p>
      <p style="color: #333; font-size: 16px;">We have received your request and our team will get back to you as soon as possible.</p>
      <div style="margin: 24px 0; padding: 16px; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px #2875B410;">
        <h3 style="color: #7AB648; margin-bottom: 8px;">Your Submission:</h3>
        <ul style="color: #333; font-size: 15px; padding-left: 20px;">
          <li><strong>Name:</strong> ${form.name}</li>
          <li><strong>Email:</strong> ${form.email}</li>
          ${form.phone ? `<li><strong>Phone:</strong> ${form.phone}</li>` : ''}
          <li><strong>Service:</strong> ${form.service || 'General Inquiry'}</li>
          <li><strong>Message:</strong> ${form.message}</li>
        </ul>
      </div>
      <p style="color: #333; font-size: 15px;">If you have any urgent questions, feel free to reply to this email or call us directly.</p>
      <div style="margin-top: 32px; color: #888; font-size: 13px;">IHAME Logistics & Supply LTD | Kigali, Rwanda</div>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.json();
    if (!form.name || !form.email || !form.message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    // Send to admin
    await sendEmail({
      to: ADMIN_EMAIL,
      subject: `New Website Inquiry from ${form.name}`,
      html: adminEmailHtml(form),
    });
    // Send confirmation to user
    await sendEmail({
      to: form.email,
      subject: 'We Received Your Request | IHAME Logistics',
      html: userEmailHtml(form),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
} 