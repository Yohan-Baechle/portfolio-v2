import Link from 'next/link';
import Image from 'next/image';
import {Card, CardHeader} from './ui/card';
import {Link2Icon} from 'lucide-react';
import {RiGithubFill} from 'react-icons/ri';
import {Badge} from './ui/badge';

interface Project {
    image: string;
    link: string;
    github: string;
    category: string;
    name: string;
    description: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({project}: ProjectCardProps) => {
    return (
        <Card className='relative overflow-hidden group'>
            <CardHeader className='p-0'>
                {/* image */}
                <div
                    className='relative flex w-full items-center justify-center overflow-hidden h-[300px] bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:bg-no-repeat xl:dark:bg-work_project_bg_dark'>
                    <Image
                        className='absolute bottom-0 shadow-2xl'
                        src={project.image}
                        width={247}
                        height={250}
                        alt={project.name}
                        priority
                    />
                    {/* btn links */}
                    <div className='flex gap-x-4'>
                        <Link
                            href={project.link}
                            className='flex scale-0 items-center justify-center rounded-full opacity-0 transition-all duration-200 bg-secondary w-[54px] h-[54px] group-hover:scale-100 group-hover:opacity-100'
                        >
                            <Link2Icon className='text-white'/>
                        </Link>
                        <Link
                            href={project.github}
                            className='flex scale-0 items-center justify-center rounded-full opacity-0 transition-all duration-300 bg-secondary w-[54px] h-[54px] group-hover:scale-100 group-hover:opacity-100'
                        >
                            <RiGithubFill className='text-white'/>
                        </Link>
                    </div>
                </div>
            </CardHeader>
            <div className='h-full px-8 py-6'>
                <Badge className='absolute top-4 left-5 mb-2 text-sm font-medium uppercase'>
                    {project.category}
                </Badge>
                <h4 className='mb-1 h4'>{project.name}</h4>
                <p className='text-lg text-muted-foreground'>{project.description}</p>
            </div>
        </Card>
    );
};

export default ProjectCard;
