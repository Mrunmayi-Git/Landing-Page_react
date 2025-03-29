import React from 'react';
import heroImage from "../assets/hero-image.png";
import {motion} from 'framer-motion'
import { fadeIn, textVariant } from "../ultils/motion";

const Hero = () => {
    return (
        <section id="home" className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-24 pb-6 px-4 sm:px-6 lg:px-8'>
            {/* Left Column */}
            <div className='w-full md:w-1/2 space-y-8'>
                {/* Star Badge */}
             <motion.div 
               variants={fadeIn('right',0.2)}
               initial="hidden"
               whileInView="show"
             >
             <div className='flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-200 w-fit px-4 py-4 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
                    <span className='text-blue-600 hover:text-amber-300 group-hover:scale-110 transition-transform'>★</span>
                    <span className='text-sm font-medium font-bold'>Jump Start Your Growth</span>
                </div>
             </motion.div>
                <motion.h1 
                 variants={textVariant(0.3)}
                 initial="hidden"
                 whileInView="show"
                className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                    We boost the growth for
                    <span className='text-blue-600 relative inline-block'>
                        Startup to Fortune 900 
                        <span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60'></span>
                    </span> 
                    Companies
                    <span className='inline-block ml-2 animate-pulse'>💻</span>
                </motion.h1>
                <motion.p 
                 variants={fadeIn('up',0.4)}
                 initial="hidden"
                 whileInView="show"
                className='text-gray-600 text-lg md:text-xl max-w-xl'>
                    Fueling success from ambitious beginnings to industry leaders, we accelerate growth at every stage.
                </motion.p>

                {/* Input & Button */}
                <motion.div 
                
                variants={fadeIn('up',0.5)}
                initial="hidden"
                whileInView="show"
                className='flex gap-3 max-w-md'>
                    <div className='flex'>
                        <input 
                            type="email" 
                            placeholder='Email address' 
                            className='flex-1 px-6 py-4 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all' 
                        />
                        <button className='bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-500'>
                            ➤
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Right Column */}
            <motion.div
             variants={fadeIn('left',0.5)}
             initial="hidden"
             whileInView="show"
            className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
                <div className='relative'>
                    <img 
                        src={heroImage} 
                        alt="hero image" 
                        className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300'
                    />
                </div>
            </motion.div>
        </section>
    );
}

export default Hero;
