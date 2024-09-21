import {Button} from './ui/button';
import Link from 'next/link';

export default function Cta() {
    return (
        <section className='py-24 bg-tertiary dark:bg-secondary/40'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center'>
                    <h2 className='mb-8 max-w-xl text-center h2'>
                        Prêt à transformer vos idées en réalité ? Je suis là pour vous aider.
                    </h2>
                    <Link href='/contact'>
                        <Button>Me contacter</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
