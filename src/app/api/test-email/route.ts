import { NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function GET() {
  try {
    console.log('Testing email configuration...');
    console.log('RESEND_API_KEY exists:', !!RESEND_API_KEY);
    
    if (!RESEND_API_KEY) {
      return NextResponse.json({ 
        error: 'RESEND_API_KEY not configured',
        status: 'FAILED'
      });
    }

    // Test with a simple email
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'sales@ihame.rw',
        to: 'sales@ihame.rw',
        subject: 'Test Email from IHAME Website',
        html: '<h1>Test Email</h1><p>This is a test email to verify the configuration.</p>',
      }),
    });

    console.log('Test email response status:', res.status);
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error('Test email failed:', errorText);
      return NextResponse.json({ 
        error: `Test failed: ${res.status} - ${errorText}`,
        status: 'FAILED'
      });
    }

    const result = await res.json();
    console.log('Test email success:', result);
    
    return NextResponse.json({ 
      success: true,
      emailId: result.id,
      status: 'SUCCESS'
    });
    
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Unknown error',
      status: 'FAILED'
    });
  }
}
