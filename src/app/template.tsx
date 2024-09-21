'use client';

import {motion} from 'framer-motion';

// hooks
import useScrollProgress from '@/hooks/useScrollProgress';
import {ReactNode} from "react";


const variants = {
    hidden: {opacity: 0},
    enter: {opacity: 1},
};

interface TemplateProps {
    children: ReactNode; // Typage pour les enfants
}

export default function Template({children}: TemplateProps) {
    const completion = useScrollProgress();
    return (
        <>
            <motion.main
                variants={variants}
                initial='hidden'
                animate='enter'
                transition={{type: 'linear', delay: 0.2, duration: 0.4}}
            >
                {children}
            </motion.main>
            {/* completion bar */}
            <span
                style={{transform: `translateY(${completion - 100}%)`}}
                className='fixed top-0 right-0 bottom-0 z-50 w-1 transition-all duration-700 bg-primary'
            ></span>
        </>
    );
};