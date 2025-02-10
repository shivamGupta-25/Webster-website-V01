'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Workshop = () => {
    return (
        <div id='workshop' className="container py-18 flex flex-col items-center">
            <motion.h1 
                className="text-8xl font-extrabold text-gray-900 dark:text-white mb-10"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                Workshop
            </motion.h1>
            
            <motion.div 
                className="max-w-6xl max-h-5xl h-full w-full bg-white dark:bg-gray-900 shadow-2xl rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }}
            >
                <Image 
                    src="/assets/WorkshopBanner.png" 
                    alt="Workshop" 
                    width={2048} 
                    height={1152} 
                    className="w-full object-cover"
                />
                <div className="p-10 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-5">
                        Unlock Your Potential
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                        Join us for an immersive workshop where you'll gain valuable insights and hands-on experience from industry experts.
                    </p>
                    <div className="text-left text-gray-700 dark:text-gray-300 mb-6 space-y-3 border-l-4 border-blue-500 pl-4">
                        <p><strong className="text-gray-900 dark:text-white">📅 Date:</strong> March 15, 2025</p>
                        <p><strong className="text-gray-900 dark:text-white">📍 Location:</strong> Delhi, India</p>
                        <p><strong className="text-gray-900 dark:text-white">🏛️ Venue:</strong> Conference Hall, Delhi University</p>
                        <p><strong className="text-gray-900 dark:text-white">📖 Description:</strong> This workshop will cover essential topics in data science, machine learning, and modern web development with hands-on sessions led by industry professionals.</p>
                    </div>
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button className="p-6 rounded-[30px] shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">Register</Button>

                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Workshop;
