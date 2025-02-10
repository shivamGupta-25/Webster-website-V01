"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-2">
                <div className="flex flex-col items-center justify-center text-center ml-10">
                    <h1 className='text-9xl font-bold'>Webster's</h1>
                    <h2 className='text-2xl font-normal'>The Computer Science Society of Shivaji College</h2>
                    <h3 className='text-2xl font-normal'>University of Delhi</h3>
                    <p className='py-8'>Webster's established in 1984, the Department of Computer Science is dedicated to fostering academic excellence and intellectual growth. It strives to enhance the cognitive aspect of education, ensuring a strong foundation for its students.</p>
                    <div className="flex gap-8 py-4">
                        <Button className="p-6 rounded-[30px] shadow-lg hover:scale-105 transition-all text-lg font-bold tracking-wide">Know More</Button>
                        <Button variant="outline" className="p-6 rounded-[30px] shadow-lg hover:scale-105 transition-all text-lg font-bold tracking-wide">Techelons - 25</Button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image
                        alt="Websterlogo"
                        src="/assets/webstersLogo.png"
                        width={400}
                        height={400}
                        className='drop-shadow-[0px_8px_10px_rgba(0,0,0,0.9)]'
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
