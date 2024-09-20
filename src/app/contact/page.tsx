import {HomeIcon, MailIcon, PhoneCall} from 'lucide-react';
// composants
import Form from '@/components/Form';

export default function Contact() {
    return (
        <section>
            <div className='container mx-auto'>
                {/* texte & illustration */}
                <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
                    {/* texte */}
                    <div className='flex flex-col justify-center'>
                        <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
                            <span className='w-[30px] h-[2px] bg-primary'></span>
                            Dites Bonjour 👋
                        </div>
                        <h1 className='h1 max-w-md mb-8'>Travaillons Ensemble.</h1>
                        <p className='subtitle max-w-[600px]'>
                            Vous pouvez me contacter facilement via le formulaire ci-dessous ou directement aux
                            coordonnées indiquées. Je m&apos;efforcerai de vous répondre dans les plus brefs délais.
                        </p>
                    </div>
                    {/* illustration */}
                    <div
                        className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
                </div>
                {/* texte d'info & formulaire */}
                <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
                    {/* texte d'info */}
                    <div
                        className='flex flex-col gap-y-4 xl:gap-y-14 text-base xl:text-lg lg:px-8 lg:py-12'>
                        {/* mail */}
                        <div className='flex items-center gap-x-8'>
                            <MailIcon size={18} className='text-primary'/>
                            <div>baechle.yohan@gmail.com</div>
                        </div>
                        {/* adresse */}
                        <div className='flex items-center gap-x-8'>
                            <HomeIcon size={18} className='text-primary'/>
                            <div>7</div>
                        </div>
                        {/* téléphone */}
                        <div className='flex items-center gap-x-8'>
                            <PhoneCall size={18} className='text-primary'/>
                            <div>+33 (0)6 45 36 69 18</div>
                        </div>
                    </div>
                    <Form/>
                </div>
            </div>
        </section>
    );
};
