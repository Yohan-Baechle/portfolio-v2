'use client';

import React from "react";
import CountUp from 'react-countup';

interface BadgeProps {
    containerStyles: string;
    icon: React.ReactNode;
    endCountNum: number;
    endCountText?: string;
    badgeText: string;
}

export default function Badge({
                                  containerStyles,
                                  icon,
                                  endCountNum,
                                  endCountText,
                                  badgeText,
                              }: BadgeProps) {
    return (
        <div className={`badge ${containerStyles}`}>
            <div className='text-3xl text-primary'>{icon}</div>
            <div className='flex items-center gap-x-2'>
                <div className='text-4xl font-bold leading-none text-primary'>
                    <CountUp end={endCountNum} delay={1} duration={4}/>
                    {endCountText}
                </div>
                <div className='font-medium leading-none text-black max-w-[70px] text-[15px]'>
                    {badgeText}
                </div>
            </div>
        </div>
    );
};
