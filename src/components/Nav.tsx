import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface LinkItem {
    path: string;
    name: string;
}

const links: LinkItem[] = [
    { path: '/', name: 'accueil' },
    { path: '/projects', name: 'mes projets' },
    { path: '/contact', name: 'contact' },
];

interface NavProps {
    containerStyles: string;
    linkStyles: string;
    underlineStyles?: string;
}

export default function Nav({ containerStyles, linkStyles, underlineStyles }: NavProps) {
    const path = usePathname();
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`capitalize ${linkStyles}`}
                >
                    {link.path === path && (
                        <motion.span
                            initial={{ y: '-100%' }}
                            animate={{ y: 0 }}
                            transition={{ type: 'tween' }}
                            layoutId='underline'
                            className={`${underlineStyles}`}
                        />
                    )}
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};
