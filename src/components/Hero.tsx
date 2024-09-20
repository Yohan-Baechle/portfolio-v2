import Link from 'next/link';
import {Button} from './ui/button';
import {ArrowDown, Briefcase, Download, List, Send, Users} from 'lucide-react';
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';

export default function Hero() {
    return (
        <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
            <div className='container mx-auto'>
                <div className='flex justify-between gap-x-8'>
                    {/* texte */}
                    <div
                        className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                        <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
                            Développeur
                        </div>
                        <h1 className='h1 mb-4'>Bienvenue, je suis Yohan Baechlé</h1>
                        <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
                            Je vous invite à parcourir et explorer les différentes sections de mon portfolio pour
                            découvrir une
                            sélection de mes réalisations antérieures.
                        </p>
                        {/* boutons */}
                        <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                            <Link href='/contact'>
                                <Button className='gap-x-2'>
                                    Contactez-moi <Send size={18}/>
                                </Button>
                            </Link>
                            <Button variant='secondary' className='gap-x-2'>
                                Télécharger mon CV
                                <Download size={18}/>
                            </Button>
                        </div>
                        {/* réseaux sociaux */}
                        <Socials
                            containerStyles='flex gap-x-6 mx-auto xl:mx-0'
                            iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
                        />
                    </div>
                    {/* image */}
                    <div className='hidden xl:flex relative'>
                        {/* badge 1 */}
                        <Badge
                            containerStyles='absolute top-[24%] -left-[5rem]'
                            icon={<Briefcase/>}
                            endCountNum={3}
                            endCountText=""
                            badgeText='Années d’expérience'
                        />
                        {/* badge 2 */}
                        <Badge
                            containerStyles='absolute top-[80%] -left-[1rem]'
                            icon={<List/>}
                            endCountNum={6}
                            endCountText='k'
                            badgeText='Projets terminés'
                        />
                        {/* badge 3 */}
                        <Badge
                            containerStyles='absolute top-[55%] -right-8'
                            icon={<Users/>}
                            endCountNum={9}
                            endCountText='k'
                            badgeText='Clients satisfaits'
                        />
                        <div
                            className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
                        <DevImg
                            containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
                            imgSrc='/hero/developer.png'
                        />
                    </div>
                </div>
                {/* icône */}
                <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                    <ArrowDown className='text-3xl text-primary'/>
                </div>
            </div>
        </section>
    );
};
