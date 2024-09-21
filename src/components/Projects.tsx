'use client';

import React, {useState} from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'react js',
        name: 'Solstice Website',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'next js',
        name: 'Lumina Website',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'next js',
        name: 'Evolve Website',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'next js',
        name: 'Ignite Website',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'next js',
        name: 'Envision Website',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'fullstack',
        name: 'Serenity Website',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'fullstack',
        name: 'Nova Website',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'fullstack',
        name: 'Zenith Website',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
];

// remove category duplicates with explicit typing
const uniqueCategories: string[] = [
    'all projects',
    ...Array.from(new Set(projectData.map((item) => item.category))),
];

const Projects = () => {
    const [category, setCategory] = useState<string>('all projects');
    const [categories] = useState<string[]>(uniqueCategories);

    // Filter projects by category
    const filteredProjects = projectData.filter((project) =>
        category === 'all projects' ? true : project.category === category
    );

    return (
        <section className='min-h-screen pt-12'>
            <div className='container mx-auto'>
                <h2 className='mx-auto mb-8 text-center section-title xl:mb-16'>
                    Réalisations
                </h2>
                {/* tabs */}
                <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
                    <TabsList
                        className='mx-auto mb-12 grid h-full w-full dark:border-none md:grid-cols-4 md:border lg:max-w-[640px]'>
                        {categories.map((cat, index) => (
                            <TabsTrigger
                                onClick={() => setCategory(cat)}
                                value={cat}
                                key={index}
                                className='capitalize w-[162px] md:w-auto'
                            >
                                {cat}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {/* tabs content */}
                    <div className='grid grid-cols-1 gap-4 text-lg lg:grid-cols-3 xl:mt-8'>
                        {filteredProjects.map((project, index) => (
                            <TabsContent value={category} key={index}>
                                <ProjectCard project={project}/>
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default Projects;
