import {Sheet, SheetClose, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {AlignJustify} from 'lucide-react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {motion} from 'framer-motion';

import Logo from './Logo';
import Socials from './Socials';

interface LinkItem {
    path: string;
    name: string;
}

const links: LinkItem[] = [
    {path: '/', name: 'accueil'},
    {path: '/projets', name: 'mes projets'},
    {path: '/contact', name: 'contact'},
];

interface NavProps {
    containerStyles?: string;
    linkStyles?: string;
    underlineStyles?: string;
}

export default function Nav({containerStyles, linkStyles, underlineStyles}: NavProps) {
    const path = usePathname();

    return (
        <>
            {/* Desktop Nav */}
            <nav className={`${containerStyles} hidden md:flex`}>
                {links.map((link, index) => (
                    <Link
                        href={link.path}
                        key={index}
                        className={`capitalize ${linkStyles}`}
                    >
                        {link.path === path && (
                            <motion.span
                                initial={{y: '-100%'}}
                                animate={{y: 0}}
                                transition={{type: 'tween'}}
                                layoutId="underline"
                                className={`${underlineStyles}`}
                            />
                        )}
                        {link.name}
                    </Link>
                ))}
            </nav>

            {/* Mobile Nav */}
            <Sheet>
                <SheetTrigger asChild>
                    <AlignJustify className='cursor-pointer md:hidden'/>
                </SheetTrigger>
                <SheetContent>
                    <div className='flex h-full flex-col items-center justify-between py-8'>
                        <div className='flex flex-col items-center gap-y-32'>
                            <Logo/>
                            <nav className='flex flex-col items-center gap-y-6'>
                                {links.map((link, index) => (
                                    <SheetClose asChild key={index}>
                                        <Link href={link.path} className='text-2xl capitalize'>
                                            {link.path === path && (
                                                <motion.span
                                                    initial={{y: '-100%'}}
                                                    animate={{y: 0}}
                                                    transition={{type: 'tween'}}
                                                    layoutId="underline"
                                                />
                                            )}
                                            {link.name}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </nav>
                        </div>
                        <Socials containerStyles='flex gap-x-4' iconsStyles='text-2xl'/>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
}
