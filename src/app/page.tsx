import {Metadata} from 'next';
import About from '@/components/About';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Reviews from '@/components/Reviews';
import Cta from '@/components/CTA';

export const metadata: Metadata = {
    title: 'Accueil - Yohan Baechlé - Développeur Web et Mobile',
    description:
        'Bienvenue sur le portfolio de Yohan Baechlé, développeur web fullstack spécialisé en création de solutions web et mobiles sur mesure.',
};

export default function Home() {
    return (
        <main>
            <Hero/>
            <About/>
            <Services/>
            <Work/>
            <Reviews/>
            <Cta/>
        </main>
    );
}
