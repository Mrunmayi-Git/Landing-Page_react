import { useState } from 'react';

import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyLogo from './components/CompanyLogo'; // Ensure this file exists
import PurposeSection from './components/PurposeSection';
import Feature from './components/Feature';
import ScheduleSection from './components/ScheduleSection';
import Monitorsection from './components/Monitorsection';
import PricingSection from './components/PricingSection';
import Servicesection from './components/Servicesection';
import NewletterSection from './components/NewletterSection';
import TestimonialSection from './components/TestimonialSection';
;import Footer from './components/Footer'
function App() {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10'></div>
      <div className='overflow-hidden'>
        <Navbar />
        <Hero />   
        <CompanyLogo />
        <PurposeSection />
        <Feature />
        <ScheduleSection />
        <Monitorsection />
        <PricingSection /> 
        <Servicesection/>
        <NewletterSection/>
        <TestimonialSection/>
        <Footer/>
      </div>
    </main>
  );
}

export default App;
