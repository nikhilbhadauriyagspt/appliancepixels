import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/Hero';
import StatsAndProcess from '../components/StatsAndProcess';
import About from '../components/About';
import TrustFeatures from '../components/TrustFeatures';
import Services from '../components/Services';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import HomeCTA from '../components/HomeCTA';
import FAQ from '../components/FAQ';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Appliance Pixels - Trusted Home Appliance Repair Services</title>
        <meta name="description" content="Reliable home appliance repair near you. Experts in washing machines, refrigerators, ACs & more. Certified technicians, same-day service, fair pricing." />
        <link rel="canonical" href="https://www.appliancepixels.com/" />
        
        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Appliance Pixels - Trusted Home Appliance Repair Services" />
        <meta property="og:description" content="Reliable home appliance repair near you. Experts in washing machines, refrigerators, ACs & more. Certified technicians, same-day service, fair pricing." />
        <meta property="og:image" content="https://www.appliancepixels.com/logo/logo.png" />
        <meta property="og:url" content="https://www.appliancepixels.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Hero />
      <TrustFeatures />
      <Services />
      <StatsAndProcess />
      <About />
      <Process />
      <Blog />
      <HomeCTA />
      <Contact />
    </>
  );
};

export default Home;



