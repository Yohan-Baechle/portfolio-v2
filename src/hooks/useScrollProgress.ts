import {useEffect, useState} from 'react';

const useScrollProgress = (): number => {
    const [completion, setCompletion] = useState<number>(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                const scrollPercentage = (currentProgress / scrollHeight) * 100;
                setCompletion(Number(scrollPercentage.toFixed(2)));
            }
        };

        window.addEventListener('scroll', updateScrollCompletion);
        return () => window.removeEventListener('scroll', updateScrollCompletion);
    }, []);

    return completion;
};

export default useScrollProgress;
