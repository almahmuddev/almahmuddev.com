import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const { name, phone, email, subject, message } = await req.json()

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',  // change after domain verified
      to: process.env.CONTACT_EMAIL,                      // your email in .env.local
      subject: subject ? `Portfolio: ${subject}` : `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'Not provided'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
      replyTo: email,
    })

    return Response.json({ success: true }, { status: 200 })

  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
