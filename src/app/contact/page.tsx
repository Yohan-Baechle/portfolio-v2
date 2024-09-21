import {Calendar, MailIcon, PhoneCall} from 'lucide-react';
import Form from '@/components/Form';

export const metadata = {
    title: 'Contactez-moi - Yohan Baechlé',
    description: 'Prenez contact avec Yohan Baechlé pour toute demande de collaboration ou de projet.',
};

export default function Contact() {
    return (
        <section>
            <div className='container mx-auto'>
                {/* texte & illustration */}
                <div className='mb-6 grid pt-12 xl:h-[480px] xl:mb-24 xl:grid-cols-2'>
                    {/* texte */}
                    <div className='flex flex-col justify-center'>
                        <div className='mb-4 flex items-center gap-x-4 text-lg text-primary'>
                            <span className='w-[30px] h-[2px] bg-primary'></span>
                            Faites-moi signe 👋
                        </div>
                        <h1 className='mb-8 max-w-md h1'>Travaillons Ensemble.</h1>
                        <p className='subtitle max-w-[600px]'>
                            Vous pouvez me contacter facilement via le formulaire ci-dessous ou directement aux
                            coordonnées indiquées. Je m&apos;efforcerai de vous répondre dans les plus brefs délais.
                        </p>
                    </div>
                    {/* illustration */}
                    <div
                        className='hidden w-full bg-contain bg-top bg-no-repeat bg-contact_illustration_light dark:bg-contact_illustration_dark xl:flex'></div>
                </div>
                {/* texte d'info & formulaire */}
                <div className='mb-24 grid grid-cols-1 lg:grid-cols-3 lg:justify-items-center xl:mb-32'>
                    {/* texte d'info */}
                    <div
                        className='flex flex-col gap-y-8 text-base lg:px-8 lg:py-12 xl:gap-y-10 xl:text-lg lg:col-span-1'>
                        {/* email */}
                        <div>
                            <h3 className='mb-2 font-semibold'>Email</h3>
                            <div className='flex items-center gap-x-6'>
                                <MailIcon size={36} className='text-primary'/>
                                <a href='mailto:baechle.yohan@gmail.com' className='text-foreground hover:underline'>
                                    baechle.yohan@gmail.com
                                </a>
                            </div>
                        </div>
                        {/* téléphone */}
                        <div>
                            <h3 className='mb-2 font-semibold'>Téléphone</h3>
                            <div className='flex items-center gap-x-6'>
                                <PhoneCall size={36} className='text-primary'/>
                                <a href='tel:+33645366918' className='text-foreground hover:underline'>
                                    +33 (0)6 45 36 69 18
                                </a>
                            </div>
                        </div>
                        {/* Calendly */}
                        <div>
                            <h3 className='mb-2 font-semibold'>Planifier un appel</h3>
                            <div className='flex items-center gap-x-6'>
                                <Calendar size={36} className='text-primary'/>
                                <a href='https://calendly.com/baechle-yohan/30min' target='_blank'
                                   className='text-foreground hover:underline'>
                                    Réserver
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* formulaire */}
                    <div className='lg:col-span-2'>
                        <Form/>
                    </div>
                </div>
            </div>
        </section>
    );
}
