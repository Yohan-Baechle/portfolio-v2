'use client';

import {Facebook, Github, Instagram, Linkedin, Youtube} from 'lucide-react';
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
        path: 'https://www.youtube.com',
        name: <Youtube size={24}/>, // Icône Youtube de lucide-react
    },
    {
        path: 'https://www.linkedin.com',
        name: <Linkedin size={24}/>, // Icône LinkedIn de lucide-react
    },
    {
        path: 'https://github.com',
        name: <Github size={24}/>, // Icône Github de lucide-react
    },
    {
        path: 'https://www.facebook.com',
        name: <Facebook size={24}/>, // Icône Facebook de lucide-react
    },
    {
        path: 'https://www.instagram.com',
        name: <Instagram size={24}/>, // Icône Instagram de lucide-react
    },
];

const Socials: React.FC<SocialsProps> = ({containerStyles, iconsStyles}) => {
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

export default Socials;
