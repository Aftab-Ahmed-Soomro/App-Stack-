import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header'
import FormSection from './components/FormSection'
import Awards from './components/Awards'
import Services from './components/Services'
import Niche from './components/Niche'
import Carousel from './components/Carousel'
import Hire from './components/Hire'
import TechStack from './components/TechStack'
import Clients from './components/Clients'
import Mediocre from './components/Mediocre'
import Startups from './components/Startups'
import Domain from './components/Domain'
import Company from './components/Company'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div>
      <Header />
      <FormSection />
      <Awards />
      <Services />
      <Niche />
      <Carousel />
      <Hire />
      <TechStack />
      <Clients />
      <Mediocre />
      <Startups />
      <Domain />
      <Company />
      <Footer />
    </div>
  )
}

export default App
