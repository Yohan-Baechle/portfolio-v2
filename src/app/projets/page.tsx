import Projects from '@/components/Projects'; // Garde Projects comme un client component

export const metadata = {
    title: 'Mes Réalisations - Yohan Baechlé',
    description: 'Découvrez les projets de développement web et d\'applications réalisés par Yohan Baechlé.',
};

export default function ProjectsPage() {
    return <Projects/>;
}
