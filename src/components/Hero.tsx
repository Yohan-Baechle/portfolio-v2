import Link from 'next/link';
import {Button} from './ui/button';
import {Download, Send} from 'lucide-react';

import {RiArrowDownSLine, RiBriefcase4Fill, RiTeamFill, RiTodoFill,} from 'react-icons/ri';

// components
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';

export default function Hero() {
    return (
        <section
            className='bg-cover bg-bottom bg-no-repeat py-12 bg-hero dark:bg-none xl:py-24 xl:pt-28'>
            <div className='container mx-auto'>
                <div className='flex justify-between gap-x-8'>
                    {/* text */}
                    <div
                        className='mx-auto flex flex-col justify-center text-center max-w-[600px] xl:mx-0 xl:text-left'>
                        <div className='mb-4 text-sm font-semibold uppercase text-primary tracking-[4px]'>
                            Développeur
                        </div>
                        <h1 className='mb-4 h1'>Bonjour, je suis Yohan Baechlé</h1>
                        <p className='mx-auto subtitle max-w-[490px] xl:mx-0'>
                            Je vous invite à explorer mon portfolio, qui présente un aperçu de mon parcours
                            professionnel ainsi que les projets que j&apos;ai réalisés.
                        </p>
                        {/* buttons */}
                        <div className='mx-auto mb-12 flex flex-col gap-x-3 gap-y-3 md:flex-row xl:mx-0'>
                            <Link href='/contact'>
                                <Button className='gap-x-2'>
                                    Me contacter <Send size={18}/>
                                </Button>
                            </Link>
                            <a href='/Yohan_BAECHLE_CV_FR.pdf' download>
                                <Button variant='outline' className='gap-x-2'>
                                    Télécharger mon CV
                                    <Download size={18}/>
                                </Button>
                            </a>
                        </div>
                        {/* socials */}
                        <Socials
                            containerStyles='flex gap-x-6 mx-auto xl:mx-0'
                            iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
                        />
                    </div>
                    {/* image */}
                    <div className='relative hidden xl:flex'>
                        {/* badge 1 */}
                        <Badge
                            containerStyles='absolute top-[24%] -left-[5rem]'
                            icon={<RiBriefcase4Fill/>}
                            endCountNum={3}
                            badgeText='Years Of Experience'
                        />
                        {/* badge 2 */}
                        <Badge
                            containerStyles='absolute top-[80%] -left-[1rem]'
                            icon={<RiTodoFill/>}
                            endCountNum={6}
                            endCountText='k'
                            badgeText='Finished Projects'
                        />
                        {/* badge 3 */}
                        <Badge
                            containerStyles='absolute top-[55%] -right-8'
                            icon={<RiTeamFill/>}
                            endCountNum={9}
                            endCountText='k'
                            badgeText='Happy Clients'
                        />
                        <div
                            className='absolute -top-1 -right-2 bg-no-repeat bg-hero_shape2_light w-[500px] h-[500px] dark:bg-hero_shape2_dark'></div>
                        <DevImg
                            containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
                            imgSrc='/hero/portrait.jpg'
                        />
                    </div>
                </div>
                {/* icon */}
                <div className='mt-24 flex animate-bounce justify-center'>
                    <RiArrowDownSLine className='text-3xl text-primary'/>
                </div>
            </div>
        </section>
    );
};