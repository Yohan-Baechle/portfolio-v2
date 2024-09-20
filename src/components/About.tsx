import Image from 'next/image';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Briefcase, GraduationCap, HomeIcon, MailIcon, PhoneCall, User2,} from 'lucide-react';
import DevImg from './DevImg';

interface InfoItem {
    icon: JSX.Element;
    text: string;
}

interface QualificationItem {
    title: string;
    data: {
        university?: string;
        qualification?: string;
        company?: string;
        role?: string;
        years: string;
    }[];
}

interface SkillItem {
    title: string;
    data: {
        name?: string;
        imgPath?: string;
    }[];
}

const infoData: InfoItem[] = [
    {
        icon: <User2 size={20}/>,
        text: 'Yohan Baechlé',
    },
    {
        icon: <PhoneCall size={20}/>,
        text: '+33 (0)6 45 36 69 18',
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'baechle.yohan@gmail.com',
    },
    {
        icon: <HomeIcon size={20}/>,
        text: 'Toul, Grand Est, France',
    },
];

const qualificationData: QualificationItem[] = [
    {
        title: 'éducation',
        data: [
            {
                university: 'Université Exemple',
                qualification: 'Licence en Sciences',
                years: '2015 - 2018',
            },
            {
                university: 'Autre Université',
                qualification: 'Master en Arts',
                years: '2019 - 2021',
            },
            {
                university: 'Encore une autre Université',
                qualification: 'Doctorat en Informatique',
                years: '2021 - 2025',
            },
        ],
    },
    {
        title: 'expérience',
        data: [
            {
                company: 'ABC Inc.',
                role: 'Ingénieur Logiciel',
                years: '2018 - 2020',
            },
            {
                company: 'XYZ Corporation',
                role: 'Développeur Senior',
                years: '2020 - 2022',
            },
            {
                company: 'Tech Innovators',
                role: 'Développeur Principal',
                years: '2022 - Présent',
            },
        ],
    },
];

const skillData: SkillItem[] = [
    {
        title: 'compétences',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Développement Front-end',
            },
            {
                name: 'Javascript, PHP',
            },
            {
                name: 'Développement Back-end',
            },
        ],
    },
    {
        title: 'outils',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },
            {
                imgPath: '/about/wordpress.svg',
            },
        ],
    },
];

export default function About() {
    const getData = <T extends { title: string }>(arr: T[], title: string): T | undefined => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className='xl:h-[860px] pb-12 xl:py-24'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                    Parlons de moi
                </h2>
                <div className='flex flex-col xl:flex-row'>
                    {/* image */}
                    <div className='hidden xl:flex flex-1 relative'>
                        <DevImg
                            containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
                            imgSrc='/about/developer.png'
                        />
                    </div>
                    {/* tabs */}
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList
                                className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                                    Infos Personnelles
                                </TabsTrigger>
                                <TabsTrigger
                                    className='w-[162px] xl:w-auto'
                                    value='qualifications'
                                >
                                    Qualifications
                                </TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                                    Compétences
                                </TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className='text-lg mt-12 xl:mt-8'>
                                {/* personal */}
                                <TabsContent value='personal'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-4'>
                                            Une Qualité de Service Inégalée
                                        </h3>
                                        <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                                            Je me spécialise dans la création d&apos;applications intuitives avec
                                            des technologies de pointe, offrant des expériences utilisateur dynamiques
                                            et engageantes.
                                        </p>
                                        {/* icons */}
                                        <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                            {infoData.map((item, index) => (
                                                <div
                                                    className='flex items-center gap-x-4 mx-auto xl:mx-0'
                                                    key={index}
                                                >
                                                    <div className='text-primary'>{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            ))}
                                        </div>
                                        {/* languages */}
                                        <div className='flex flex-col gap-y-2'>
                                            <div className='text-primary'>Compétences Linguistiques</div>
                                            <div className='border-b border-border'></div>
                                            <div>Français, Anglais (niveau B2)</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* qualifications */}
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className='h3 mb-8 text-center xl:text-left'>
                                            Mon Parcours atypique
                                        </h3>
                                        {/* experience & education wrapper */}
                                        <div className='grid md:grid-cols-2 gap-y-8'>
                                            {/* experience */}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <Briefcase/>
                                                    <h4 className='capitalize font-medium'>
                                                        {getData(qualificationData, 'experience')?.title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'experience')?.data.map(
                                                        (item, index) => {
                                                            const {company, role, years} = item;
                                                            return (
                                                                <div className='flex gap-x-8 group' key={index}>
                                                                    <div
                                                                        className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                        <div
                                                                            className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className='font-semibold text-xl leading-none mb-2'>
                                                                            {company}
                                                                        </div>
                                                                        <div
                                                                            className='text-lg leading-none text-muted-foreground mb-4'>
                                                                            {role}
                                                                        </div>
                                                                        <div className='text-base font-medium'>
                                                                            {years}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                            {/* education */}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <GraduationCap size={28}/>
                                                    <h4 className='capitalize font-medium'>
                                                        {getData(qualificationData, 'education')?.title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'education')?.data.map(
                                                        (item, index) => {
                                                            const {university, qualification, years} = item;
                                                            return (
                                                                <div className='flex gap-x-8 group' key={index}>
                                                                    <div
                                                                        className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                        <div
                                                                            className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className='font-semibold text-xl leading-none mb-2'>
                                                                            {university}
                                                                        </div>
                                                                        <div
                                                                            className='text-lg leading-none text-muted-foreground mb-4'>
                                                                            {qualification}
                                                                        </div>
                                                                        <div className='text-base font-medium'>
                                                                            {years}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* skills */}
                                <TabsContent value='skills'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-8'>Ce que j&apos;utilise au Quotidien</h3>
                                        {/* skills */}
                                        <div className='mb-16'>
                                            <h4 className='text-xl font-semibold mb-2'>Compétences</h4>
                                            <div className='border-b border-border mb-4'></div>
                                            {/* skill list */}
                                            <div>
                                                {getData(skillData, 'skills')?.data.map(
                                                    (item, index) => (
                                                        <div
                                                            className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'
                                                            key={index}
                                                        >
                                                            <div className='font-medium'>{item.name}</div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                        {/* tools */}
                                        <div>
                                            <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                                                Outils
                                            </h4>
                                            <div className='border-b border-border mb-4'></div>
                                            {/* tool list */}
                                            <div className='flex gap-x-8 justify-center xl:justify-start'>
                                                {getData(skillData, 'tools')?.data.map((item, index) => {
                                                    const {imgPath} = item;
                                                    return (
                                                        <div key={index}>
                                                            <Image
                                                                src={imgPath || ''}
                                                                width={48}
                                                                height={48}
                                                                alt=''
                                                                priority
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};
