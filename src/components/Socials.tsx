'use client';

import {Github, Linkedin} from 'lucide-react';
import Link from 'next/link';

interface SocialIcon {
    path: string;
    name: JSX.Element;
}

interface SocialsProps {
    containerStyles: string;
    iconsStyles: string;
}

const icons: SocialIcon[] = [
    {
        path: 'https://www.linkedin.com/in/yohanbaechle',
        name: <Linkedin size={24}/>,
    },
    {
        path: 'https://github.com/Yohan-Baechle',
        name: <Github size={24}/>,
    },
];

export default function Socials({containerStyles, iconsStyles}: SocialsProps) {
    return (
        <div className={containerStyles}>
            {icons.map((icon, index) => (
                <Link href={icon.path} key={index} target="_blank" rel="noopener noreferrer">
                    <div className={iconsStyles}>{icon.name}</div>
                </Link>
            ))}
        </div>
    );
};
