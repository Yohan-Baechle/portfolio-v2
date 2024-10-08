'use client';

import {Button} from './ui/button';
import {Moon, Sun} from "lucide-react"
import {useTheme} from 'next-themes';

const ThemeToggler = () => {
    const {theme, setTheme} = useTheme();
    return (
        <div>
            <Button
                variant='outline'
                size='icon'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                <Sun
                    className='rotate-0 scale-100 transition-all h-[1.2rem] w-[1.2rem] dark:-rotate-90 dark:scale-0'/>
                <Moon
                    className='absolute rotate-90 scale-0 transition-all h-[1.2rem] w-[1.2rem] dark:rotate-0 dark:scale-100'/>
            </Button>
        </div>
    );
};

export default ThemeToggler;
