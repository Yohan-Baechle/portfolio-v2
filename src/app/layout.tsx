import './globals.css';
import {Outfit} from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {ThemeProvider} from '@/components/ThemeProvider';
import {Toaster} from 'sonner';

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
});

export const metadata = {
    title: 'Portfolio - Yohan Baechlé',
    description: 'Le portfolio de Yohan Baechlé, développeur web et mobile.',
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body className={`${outfit.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
            <Header/>
            {children}
            <Footer/>
            <Toaster
                toastOptions={{
                    className: 'bg-background text-primary border-accent',
                }}
            />
        </ThemeProvider>
        </body>
        </html>
    );
}
