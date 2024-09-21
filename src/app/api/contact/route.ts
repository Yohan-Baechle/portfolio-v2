import nodemailer from 'nodemailer';
import {NextResponse} from 'next/server';

export async function POST(req: Request) {
    const {email, name, message} = await req.json();

    // Configurer le transporteur Nodemailer avec Hostinger
    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com', // Serveur SMTP de Hostinger
        port: 465, // Port pour SSL (vous pouvez utiliser 587 pour TLS)
        secure: true, // Utiliser SSL
        auth: {
            user: process.env.SMTP_USER, // Votre adresse email sur Hostinger
            pass: process.env.SMTP_PASS, // Votre mot de passe d'email Hostinger
        },
    });

    try {
        // Envoyer l'email
        await transporter.sendMail({
            from: `"Yohan Baechlé" <${process.env.SMTP_USER}>`, // Expéditeur
            to: process.env.SMTP_USER, // Destinataire (vous-même)
            subject: 'Nouveau message du formulaire de contact',
            text: `De : ${name} (${email})\nMessage : ${message}`,
            html: `<p>De : ${name} (${email})</p><p>Message : ${message}</p>`,
        });

        return NextResponse.json({message: 'Email envoyé avec succès.'});
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return NextResponse.json({message: "Erreur lors de l'envoi de l'email."}, {status: 500});
    }
}
