import Mailjet from "node-mailjet";
import { NextRequest, NextResponse } from "next/server";

const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const { email, subject, message } = await req.json();

    const data = {
      Messages: [
        {
          From: {
            Email: process.env.EMAIL_CONTACT_FROM as string,
          },
          To: [
            {
              Email: process.env.EMAIL_CONTACT_TO as string,
            },
          ],
          Subject: subject,
          TextPart: `L'adresse email : ${email} vous a envoyé le message suivant :\n${message}`,
        },
      ],
    };
    try {
      await mailjet.post("send", { version: "v3.1" }).request(data);
      return NextResponse.json({ message: "Email has been sent" });
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }
}
