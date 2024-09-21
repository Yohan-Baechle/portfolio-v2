'use client';

import {RiGithubFill, RiLinkedinBoxFill} from 'react-icons/ri';
import Link from 'next/link';
import {ReactNode} from "react";

interface SocialIcon {
    path: string;
    name: ReactNode;
}

interface SocialsProps {
    containerStyles: string;
    iconsStyles: string;
}

const icons: SocialIcon[] = [
    {
        path: 'https://www.linkedin.com/in/yohanbaechle',
        name: <RiLinkedinBoxFill size={28}/>,
    },
    {
        path: 'https://github.com/Yohan-Baechle',
        name: <RiGithubFill size={28}/>,
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
