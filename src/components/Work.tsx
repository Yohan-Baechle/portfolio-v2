'use client';
import Link from 'next/link';
import {Button} from './ui/button';

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Pagination} from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

const projectData = [
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Gigpulse',
        description:
            'Projet qui m\'a permis d`\'obtenir mon titre professionnel DWWM.',
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

const Work = () => {
    return (
        <section className='relative mb-32 xl:mb-48'>
            <div className='container mx-auto'>
                {/* text */}
                <div
                    className='mx-auto mb-12 flex flex-col items-center justify-center text-center max-w-[400px] xl:h-[400px] xl:mx-0 xl:items-start xl:text-left'>
                    <h2 className='mb-4 section-title'>Mes réalisations</h2>
                    <p className='mb-8 subtitle'>
                        Découvrez mes projets
                    </p>
                    <Link href='/projets'>
                        <Button>Tous mes projets</Button>
                    </Link>
                </div>
                {/* slider */}
                <div className='top-0 right-0 xl:max-w-[1000px] xl:absolute'>
                    <Swiper
                        className='h-[480px]'
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{clickable: true}}
                    >
                        {/* show only the first 4 projects for the slides */}
                        {projectData.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project}/>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Work;
