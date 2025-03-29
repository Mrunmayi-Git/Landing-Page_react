import React from 'react';
import monitorcardimg from "../assets/monitor-card.webp";
import { FaArrowRight } from 'react-icons/fa';

const Monitorsection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
        
        {/* Left Side */}
        <div className='md:w-1/2 w-full'>
          <p className='text-green-600 font-semibold'>MONITOR</p>
          <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>
           Introducing best mobile carousels
          </h2>
          <p className='text-gray-600 mb-8 md: w-4/5'>
            Take control of your time and boost productivity with our intelligent scheduling system. 
            Automate appointments, manage team availability, and deliver an exceptional customer experience 
            through seamless calendar management.
          </p>
          <a href='#' className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>
            Explore scheduling features  
            <FaArrowRight className='w-6 h-6' />
          </a>
        </div>

        {/* Right Side (Image) */}
        <div className='md:w-1/2 w-full'>
          <img src={monitorcardimg} alt="Schedule Image" className='w-full h-auto' />
        </div>

      </div>
    </section>
  );
}

export default Monitorsection;
