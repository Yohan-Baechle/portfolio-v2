import DevImg from './DevImg';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {ReactNode} from 'react';
import {GraduationCap, HomeIcon, MailIcon, PhoneCall, User2} from 'lucide-react';
import {FaCss3Alt, FaHtml5, FaJava, FaJs, FaLaravel, FaPhp, FaReact, FaSymfony} from 'react-icons/fa';
import {
    SiDart,
    SiFigma,
    SiFlutter,
    SiIntellijidea,
    SiNextdotjs,
    SiNotion,
    SiSpringboot,
    SiWordpress
} from 'react-icons/si';

// Interfaces
interface InfoItem {
    icon: ReactNode;
    text: string;
}

interface QualificationItem {
    company?: string;
    role?: string;
    university?: string;
    qualification?: string;
    years: string;
}

interface QualificationData {
    title: string;
    data: QualificationItem[];
}

interface SkillItem {
    name: string;
    icon: ReactNode;
}

// Sample data
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

const qualificationData: QualificationData[] = [
    {
        title: 'formations',
        data: [
            {
                university: 'Titre professionnel Développeur Web et Web Mobile (niveau 5)',
                qualification: 'O\'CLock',
                years: '2023',
            },
            {
                university: 'Titre professionnel Concepteur Développeur d\'Applications (niveau 6)',
                qualification: 'AFPA Pompey',
                years: 'en cours',
            },
        ],
    },
];

const skillData = [
    {
        title: 'technologies',
        data: [
            {
                name: 'HTML',
                icon: <FaHtml5/>,
            },
            {
                name: 'CSS',
                icon: <FaCss3Alt/>,
            },
            {
                name: 'Javascript',
                icon: <FaJs/>,
            },
            {
                name: 'PHP',
                icon: <FaPhp/>,
            },
            {
                name: 'Java',
                icon: <FaJava/>,
            },
            {
                name: 'Dart',
                icon: <SiDart/>,
            },
        ],
    },
    {
        title: 'frameworks',
        data: [
            {
                name: 'Laravel',
                icon: <FaLaravel/>,
            },
            {
                name: 'Symfony',
                icon: <FaSymfony/>,
            },
            {
                name: 'Spring Boot',
                icon: <SiSpringboot/>,
            },
            {
                name: 'React',
                icon: <FaReact/>,
            },
            {
                name: 'Next.js',
                icon: <SiNextdotjs/>,
            },
            {
                name: 'Flutter',
                icon: <SiFlutter/>,
            },
        ],
    },
    {
        title: 'outils',
        data: [
            {
                name: 'IntelliJ Idea',
                icon: <SiIntellijidea/>,
            },
            {
                name: 'Figma',
                icon: <SiFigma/>,
            },
            {
                name: 'Notion',
                icon: <SiNotion/>,
            },
            {
                name: 'WordPress',
                icon: <SiWordpress/>,
            },
        ],
    },
];

// Main Component
const About = () => {
    const getData = <T extends { title: string }>(arr: T[], title: string) => {
        return arr.find((item) => item.title === title);
    };

    const educationData = getData(qualificationData, 'formations');
    const skillsData = getData(skillData, 'technologies');
    const toolsData = getData(skillData, 'outils');

    return (
        <section className='pb-32 xl:h-[80vh] xl:py-24'>
            <div className='container mx-auto'>
                <h2 className='mx-auto mb-8 text-center section-title xl:mb-16'>
                    A propos
                </h2>
                <div className='flex flex-col xl:flex-row'>
                    {/* image */}
                    <div className='relative hidden flex-1 xl:flex'>
                        <DevImg
                            containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
                            imgSrc='/about/developer.png'
                        />
                    </div>
                    {/* tabs */}
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList
                                className='grid w-full justify-items-center dark:border-none sm:grid-cols-3 xl:max-w-[520px] xl:border'>
                                <TabsTrigger className='w-full' value='personal'>
                                    Profil
                                </TabsTrigger>
                                <TabsTrigger className='w-full' value='qualifications'>
                                    Formations
                                </TabsTrigger>
                                <TabsTrigger className='w-full' value='skills'>
                                    Compétences
                                </TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className='mt-12 text-lg xl:mt-8'>
                                {/* personal */}
                                <TabsContent value='personal'>
                                    <div>
                                        <h3 className='mb-4 h3'>Un parcours atypique</h3>
                                        <p className='subtitle xl:mx-0 xl:max-w-xl'>
                                            Mon parcours est aussi unique que passionnant. J&apos;ai débuté ma carrière
                                            en tant qu&apos;opticien, où j&apos;ai appris à comprendre rapidement les
                                            besoins des clients. Ma passion pour la programmation ne m&apos;a jamais
                                            quitté, me poussant à me lancer dans cette aventure à temps plein.
                                            <br/>
                                            Aujourd&apos;hui, je combine mon expérience passée avec mes compétences
                                            actuelles en développement pour créer des solutions qui répondent aux
                                            attentes des utilisateurs.
                                            <br/>
                                            Quand je ne suis pas devant l’ordinateur, je fais de la randonnée, je passe
                                            du temps avec ma femme, ou j&apos;explore les vastes mondes de Final Fantasy
                                            à la recherche de cristaux magiques.
                                        </p>
                                        {/* icons */}
                                        <div className='mb-12 grid gap-4 xl:grid-cols-2'>
                                            {infoData.map((item, index) => (
                                                <div className='flex items-center gap-x-4' key={index}>
                                                    <div className='text-primary'>{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            ))}
                                        </div>
                                        {/* languages */}
                                        <div className='flex flex-col gap-y-2'>
                                            <div className='text-primary'>Langues pratiquées</div>
                                            <div className='border-b border-border'></div>
                                            <div>Français (langue maternelle), Anglais (niveau B2)</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* qualifications */}
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className='mb-4 h3'>Un esprit curieux</h3>
                                        <p className='subtitle xl:max-w-xl'>
                                            Je me forme continuellement, que ce soit à travers des cours en ligne, des
                                            projets personnels ou des lectures spécialisées, afin de rester à jour dans
                                            un domaine en perpétuelle évolution. Je pratique régulièrement la veille
                                            technologique pour anticiper les tendances et intégrer les dernières
                                            avancées dans mon travail. Passionné par l&apos;intelligence artificielle,
                                            un domaine en pleine émergence, je suis fasciné par son potentiel à
                                            transformer
                                            notre manière de penser et d&apos;agir.
                                        </p>
                                        {/* education */}
                                        <div className='flex flex-col gap-y-6'>
                                            <div className='flex items-center gap-x-4 text-[22px] text-primary'>
                                                <GraduationCap size={28}/>
                                                <h4 className='font-medium capitalize'>
                                                    {educationData ? educationData.title : 'Formations'}
                                                </h4>
                                            </div>
                                            <div className='flex flex-col gap-y-8'>
                                                {educationData &&
                                                    educationData.data.map((item: QualificationItem, index) => {
                                                        const {university, qualification, years} = item;
                                                        return (
                                                            <div className='flex gap-x-8 group' key={index}>
                                                                <div
                                                                    className='relative ml-2 h-[84px] w-[1px] bg-border'>
                                                                    <div
                                                                        className='absolute rounded-full transition-all duration-500 w-[11px] h-[11px] bg-primary -left-[5px] group-hover:translate-y-[84px]'></div>
                                                                </div>
                                                                <div>
                                                                    <div
                                                                        className='mb-2 text-xl font-semibold leading-none'>
                                                                        {university}
                                                                    </div>
                                                                    <div
                                                                        className='mb-4 text-lg leading-none text-muted-foreground'>
                                                                        {qualification}
                                                                    </div>
                                                                    <div className='text-base font-medium'>{years}</div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* skills */}
                                <TabsContent value='skills'>
                                    <div>
                                        <h3 className='mb-8 text-left h3'>Stack Technique</h3>
                                        {/* technologies and frameworks */}
                                        <div className='grid grid-cols-2 gap-8'>
                                            {/* technologies */}
                                            <div>
                                                <h4 className='mb-2 text-xl font-semibold'>Technologies</h4>
                                                <div className='mb-4 border-b border-border'></div>
                                                <div>
                                                    {skillsData &&
                                                        skillsData.data.map((item: SkillItem, index) => (
                                                            <div className='flex items-center gap-x-4' key={index}>
                                                                <div className='text-primary'>{item.icon}</div>
                                                                <div className='font-medium'>{item.name}</div>
                                                            </div>
                                                        ))}
                                                </div>
                                            </div>
                                            {/* frameworks */}
                                            <div>
                                                <div>
                                                    <h4 className='mb-2 text-xl font-semibold'>Frameworks</h4>
                                                    <div className='mb-4 border-b border-border'></div>
                                                    <div>
                                                        {getData(skillData, 'frameworks')?.data.map((item: SkillItem, index) => (
                                                            <div className='flex items-center gap-x-4' key={index}>
                                                                <div className='text-primary'>{item.icon}</div>
                                                                <div className='font-medium'>{item.name}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* tools */}
                                        <div className='mt-8'>
                                            <h4 className='mb-2 text-xl font-semibold'>Outils</h4>
                                            <div className='mb-4 border-b border-border'></div>
                                            <div className='flex gap-x-8'>
                                                {toolsData &&
                                                    toolsData.data.map((item: SkillItem, index) => (
                                                        <div key={index}>
                                                            <div className='flex items-center gap-x-4'>
                                                                <div className='text-primary'
                                                                     style={{fontSize: '40px'}}>{item.icon}</div>
                                                            </div>
                                                        </div>
                                                    ))}
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

export default About;
