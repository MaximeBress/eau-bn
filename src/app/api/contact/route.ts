import { NextRequest, NextResponse } from "next/server";

const MAILJET_SEND_URL = "https://api.mailjet.com/v3.1/send";
const DEFAULT_CONTACT_TO = "contact.eaubn@gmail.com";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

export async function POST(req: NextRequest) {
  const apiKey = process.env.MJ_APIKEY_PUBLIC;
  const apiSecret = process.env.MJ_APIKEY_PRIVATE;
  const from = process.env.EMAIL_CONTACT_FROM;
  const to = process.env.EMAIL_CONTACT_TO || DEFAULT_CONTACT_TO;

  if (!apiKey || !apiSecret || !from) {
    console.error(
      "[contact] Missing configuration: MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE or EMAIL_CONTACT_FROM",
    );
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const subject =
    typeof payload.subject === "string" ? payload.subject.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";

  if (!EMAIL_REGEX.test(email) || !subject || !message) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const response = await fetch(MAILJET_SEND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")}`,
    },
    body: JSON.stringify({
      Messages: [
        {
          From: { Email: from, Name: "Site Eau BN" },
          To: [{ Email: to }],
          ReplyTo: { Email: email },
          Subject: `[Site Eau BN] ${subject}`,
          TextPart: `L'adresse email : ${email} vous a envoyé le message suivant :\n\n${message}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    console.error(
      `[contact] Mailjet error ${response.status}:`,
      await response.text(),
    );
    return NextResponse.json(
      { error: "Email could not be sent" },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Email has been sent" });
}
