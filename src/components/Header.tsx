'use client';

import React, {useEffect, useState} from 'react';
import Logo from './Logo';
import ThemeToggler from './ThemeToggler';
import Nav from './Nav';
import {usePathname} from 'next/navigation';

export default function Header() {
    const [header, setHeader] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setHeader(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`${
                header
                    ? 'py-4 bg-white shadow-md dark:bg-stone-900'
                    : 'py-6 dark:bg-transparent'
            } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}
        >
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <Logo/>
                    <div className='flex items-center gap-x-6'>
                        {/* nav */}
                        <ThemeToggler/>
                        <Nav
                            containerStyles='hidden xl:flex gap-x-8 items-center'
                            linkStyles='relative hover:text-primary transition-all'
                            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
