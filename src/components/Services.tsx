import {Code, Monitor, Smartphone} from 'lucide-react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

const servicesData = [
    {
        icon: <Monitor size={72} strokeWidth={0.8}/>,
        title: 'UI / UX',
        description:
            'Création de sites web modernes et responsive pour offrir une expérience utilisateur optimale.',
    },
    {
        icon: <Code size={72} strokeWidth={0.8}/>,
        title: 'Développement Web',
        description:
            'Développement d\'applications web Fullstack sécurisées et optimisées SEO.',
    },
    {
        icon: <Smartphone size={72} strokeWidth={0.8}/>,
        title: 'Applications Mobile',
        description:
            'Conception d\'applications mobiles natives sur mesure pour Android et iOS.',
    },
];

const Services = () => {
    return (
        <section className='mb-32 xl:mb-36'>
            <div className='container mx-auto'>
                <h2 className='mx-auto mb-16 text-center section-title xl:mb-24'>
                    Mes Services
                </h2>
                <div className='grid justify-center gap-y-12 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-24'>
                    {servicesData.map((item, index) => {
                        return (
                            <Card
                                className='relative flex w-full flex-col items-center justify-center pt-16 pb-10 shadow-md max-w-[424px] h-[300px]dev
                                '
                                key={index}
                            >
                                <CardHeader className='absolute text-primary -top-[60px]'>
                                    <div
                                        className='flex items-center justify-center w-[140px] h-[80px] bg-background dark:bg-background'>
                                        {item.icon}
                                    </div>
                                </CardHeader>
                                <CardContent className='text-center'>
                                    <CardTitle className='mb-4'>{item.title}</CardTitle>
                                    <CardDescription className='text-lg'>
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
