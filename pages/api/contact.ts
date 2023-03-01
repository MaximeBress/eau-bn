import { NextApiRequest, NextApiResponse } from 'next';
import Mailjet, { SendEmailV3_1 } from 'node-mailjet';

const mailjet = new Mailjet({
    apiKey: process.env.MJ_APIKEY_PUBLIC,
    apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, subject, message } = req.body;

    const data: SendEmailV3_1.IBody = {
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
        // @ts-ignore
        await mailjet.post('send', { version: 'v3.1' }).request<SendEmailV3_1.IResponse>(data);
        res.json({ message: 'Email has been sent' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error sending email' });
    }
}
