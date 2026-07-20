


import { NextResponse } from "next/server";
import { transporter } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, subject, message } = body;

    // ---------------------------------------------------
    // 1. Notification email → sent to YOU (the owner)
    // ---------------------------------------------------
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `🚀 New Portfolio Inquiry • ${subject}`,

      html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Portfolio Contact</title>
</head>

<body style="
    margin:0;
    padding:40px 20px;
    background:#020617;
    font-family:Arial,Helvetica,sans-serif;
">

<table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    style="max-width:700px;margin:auto;"
>

<tr>
<td>

<!-- Main Card -->
<div
style="
background:#0f172a;
border:1px solid #1e293b;
border-radius:22px;
overflow:hidden;
box-shadow:0 20px 50px rgba(0,0,0,.35);
">

<!-- Header -->
<div
style="
background:linear-gradient(135deg,#06b6d4,#0891b2);
padding:45px 35px;
text-align:center;
">

<div
style="
display:inline-block;
width:70px;
height:70px;
line-height:70px;
border-radius:50%;
background:rgba(255,255,255,.15);
color:#fff;
font-size:28px;
font-weight:bold;
margin-bottom:18px;
">
AS
</div>

<h1
style="
margin:0;
font-size:32px;
color:#ffffff;
font-weight:700;
">
New Contact Request
</h1>

<p
style="
margin:12px 0 0;
font-size:16px;
color:#e0f7ff;
">
Someone contacted you from your portfolio website.
</p>

</div>

<!-- Body -->
<div style="padding:40px;">

<h2
style="
margin:0 0 25px;
color:#ffffff;
font-size:24px;
">
Contact Information
</h2>

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="
border-collapse:collapse;
background:#111827;
border:1px solid #1f2937;
border-radius:14px;
overflow:hidden;
"
>

<tr>
<td
style="
padding:18px;
width:150px;
font-weight:bold;
color:#22d3ee;
border-bottom:1px solid #1f2937;
">
👤 Name
</td>

<td
style="
padding:18px;
color:#f8fafc;
border-bottom:1px solid #1f2937;
">
${name}
</td>
</tr>

<tr>
<td
style="
padding:18px;
font-weight:bold;
color:#22d3ee;
border-bottom:1px solid #1f2937;
">
📧 Email
</td>

<td
style="
padding:18px;
border-bottom:1px solid #1f2937;
">
<a
href="mailto:${email}"
style="
color:#67e8f9;
text-decoration:none;
font-weight:600;
">
${email}
</a>
</td>
</tr>

<tr>
<td
style="
padding:18px;
font-weight:bold;
color:#22d3ee;
border-bottom:1px solid #1f2937;
">
📝 Subject
</td>

<td
style="
padding:18px;
color:#f8fafc;
border-bottom:1px solid #1f2937;
">
${subject}
</td>
</tr>

</table>

<!-- Message -->

<div style="margin-top:35px;">

<h2
style="
margin:0 0 15px;
color:#ffffff;
font-size:22px;
">
Project Message
</h2>

<div
style="
background:#111827;
border:1px solid #1f2937;
border-left:4px solid #06b6d4;
border-radius:14px;
padding:24px;
color:#d1d5db;
font-size:15px;
line-height:1.9;
white-space:pre-wrap;
word-break:break-word;
">
${message}
</div>

</div>

<!-- Button -->

<div
style="
margin-top:40px;
text-align:center;
">

<a
href="mailto:${email}"
style="
display:inline-block;
background:#06b6d4;
padding:16px 34px;
border-radius:12px;
color:#ffffff;
text-decoration:none;
font-size:15px;
font-weight:bold;
">
Reply to ${name}
</a>

</div>

</div>

<!-- Footer -->

<div
style="
background:#0b1220;
border-top:1px solid #1f2937;
padding:28px;
text-align:center;
">

<p
style="
margin:0;
font-size:14px;
color:#94a3b8;
">
This message was sent from your portfolio contact form.
</p>

<p
style="
margin-top:10px;
font-size:13px;
color:#64748b;
">
Please reply directly to this email to contact the sender.
</p>

<hr
style="
margin:25px 0;
border:none;
border-top:1px solid #1f2937;
">

<p
style="
margin:0;
font-size:13px;
color:#475569;
">
© ${new Date().getFullYear()} Ayan Sujon • Full Stack Developer
</p>

</div>

</div>

</td>
</tr>

</table>

</body>
</html>
`,
    });

    // ---------------------------------------------------
    // 2. Thank you / auto-reply email → sent to the CLIENT
    // ---------------------------------------------------
    await transporter.sendMail({
      from: `"Ayan Sujon" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}! 🚀`,

      html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Thanks for reaching out</title>
</head>

<body style="
    margin:0;
    padding:40px 20px;
    background:#020617;
    font-family:Arial,Helvetica,sans-serif;
">

<table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    style="max-width:700px;margin:auto;"
>

<tr>
<td>

<!-- Main Card -->
<div
style="
background:#0f172a;
border:1px solid #1e293b;
border-radius:22px;
overflow:hidden;
box-shadow:0 20px 50px rgba(0,0,0,.35);
">

<!-- Header -->
<div
style="
background:linear-gradient(135deg,#06b6d4,#0891b2);
padding:45px 35px;
text-align:center;
">

<div
style="
display:inline-block;
width:70px;
height:70px;
line-height:70px;
border-radius:50%;
background:rgba(255,255,255,.15);
color:#fff;
font-size:28px;
font-weight:bold;
margin-bottom:18px;
">
AS
</div>

<h1
style="
margin:0;
font-size:30px;
color:#ffffff;
font-weight:700;
">
Thanks, ${name}! 👋
</h1>

<p
style="
margin:12px 0 0;
font-size:16px;
color:#e0f7ff;
">
Your message has landed safely in my inbox.
</p>

</div>

<!-- Body -->
<div style="padding:40px;">

<p
style="
margin:0 0 20px;
color:#d1d5db;
font-size:15px;
line-height:1.8;
">
Hey ${name},
</p>

<p
style="
margin:0 0 20px;
color:#d1d5db;
font-size:15px;
line-height:1.8;
">
Thank you for reaching out through my portfolio. I've received your message about
<strong style="color:#67e8f9;">"${subject}"</strong> and really appreciate you taking the time to get in touch.
</p>

<p
style="
margin:0 0 30px;
color:#d1d5db;
font-size:15px;
line-height:1.8;
">
I'll review your message and get back to you within 24–48 hours. In the meantime, here's a copy of what you sent:
</p>

<!-- Message Recap -->
<div
style="
background:#111827;
border:1px solid #1f2937;
border-left:4px solid #06b6d4;
border-radius:14px;
padding:24px;
color:#94a3b8;
font-size:14px;
line-height:1.9;
white-space:pre-wrap;
word-break:break-word;
">
${message}
</div>

<!-- Button -->
<div
style="
margin-top:35px;
text-align:center;
">

<a
href="https://ayansujon.vercel.app/"
style="
display:inline-block;
background:#06b6d4;
padding:16px 34px;
border-radius:12px;
color:#ffffff;
text-decoration:none;
font-size:15px;
font-weight:bold;
">
Visit My Portfolio
</a>

</div>

</div>

<!-- Footer -->

<div
style="
background:#0b1220;
border-top:1px solid #1f2937;
padding:28px;
text-align:center;
">

<p
style="
margin:0;
font-size:14px;
color:#94a3b8;
">
This is an automated confirmation — no need to reply directly to this email.
</p>

<p
style="
margin-top:10px;
font-size:13px;
color:#64748b;
">
If you need to add anything, feel free to send a new message through the portfolio site.
</p>

<hr
style="
margin:25px 0;
border:none;
border-top:1px solid #1f2937;
">

<p
style="
margin:0;
font-size:13px;
color:#475569;
">
© ${new Date().getFullYear()} Ayan Sujon • Full Stack Developer
</p>

</div>

</div>

</td>
</tr>

</table>

</body>
</html>
`,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message.",
      },
      {
        status: 500,
      }
    );
  }
}