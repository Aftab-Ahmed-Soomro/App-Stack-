import React, { useState } from 'react'
import ServiceCards from '../common/ServiceCards'
import Button2 from '../common/Button2'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ServiceBanner from '../common/ServiceBanner';

const Services = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    { 
      image: "fa-brands fa-android", 
      text: "Android App Development",
      heading: "Android App Development",
      description: "Expand your business reach with a custom Android app tailored for maximum impact. At Limegreensapps, we design high-performance Android apps that are secure, scalable, and ready to thrive in Google’s vast ecosystem. Leveraging the latest frameworks, our apps offer top-notch UI/UX, high speed, and the adaptability required to meet diverse market needs. Our end-to-end development process ensures an app that aligns with your business goals, driving customer engagement and fostering brand loyalty.",
      bannerImage: "/imgs/mobile-consulting-1.png"
    },
    { 
      image: "fa-brands fa-apple", 
      text: "iOS App Development",
      heading: "iOS App Development",
      description: "Unlock the potential of the Apple ecosystem with Limegreensapps’s iOS app development services. We build visually stunning, highly functional apps tailored for iPhones and iPads. Our team crafts each app with careful attention to Apple’s standards for quality, security, and user experience, ensuring your app resonates with a discerning audience. From concept to launch, we deliver intuitive, user-friendly iOS apps that enhance brand reputation, attract premium users, and keep them engaged.",
      bannerImage: "/imgs/mobile-consulting-2.png"
    },
    { 
      image: "fa-solid fa-layer-group", 
      text: "Cross Platform App Development",
      heading: "Cross Platform App Development",
      description: "Maximize your app’s reach and ROI with cross-platform development from Limegreensapps. Using advanced frameworks like Flutter and React Native, we build apps that run seamlessly on both Android and iOS, offering a native-like experience without the need for separate development. Our cross-platform solutions ensure quality, consistent performance, and the ability to quickly reach users across devices, helping your brand grow faster with an efficient, user-focused app.",
      bannerImage: "/imgs/mobile-consulting-3.png"
    },
    { 
      image: "fa-solid fa-gamepad", 
      text: "Game App Development",
      heading: "Game App Development",
      description: "Create immersive gaming experiences with Limegreensapps’s game app development services. We bring games to life with stunning graphics, smooth mechanics, and engaging storylines across genres—from adventure to puzzle games. Using engines like Unity and Unreal, we craft games optimized for mobile devices, ensuring engaging gameplay, high performance, and smart monetization strategies. Let us help you captivate players and elevate your brand with a game that stands out.",
      bannerImage: "/imgs/mobile-consulting-4.png"
    },
    { 
      image: "fa-solid fa-shuffle", 
      text: "Hybrid App Development",
      heading: "Hybrid App Development",
      description: "Reach a broader audience with hybrid apps that offer the best of native and web capabilities. At Limegreensapps, we develop apps using robust frameworks like Ionic, allowing fast, budget-friendly deployment across platforms. Hybrid apps offer versatility without compromising quality, delivering a smooth, responsive experience on both Android and iOS. Perfect for businesses wanting to deploy quickly, our hybrid solutions provide consistent functionality and a seamless user experience.",
      bannerImage: "/imgs/mobile-consulting-5.png"
    },
    { 
      image: "fa-solid fa-mobile-screen-button", 
      text: "Wearable App Development",
      heading: "Wearable App Development",
      description: "Stay ahead with apps designed for wearable devices that provide connectivity beyond the smartphone. Limegreensapps develops wearable apps tailored for smartwatches, fitness trackers, and health monitors, integrating features like health tracking, notifications, and location services. Ideal for fitness, lifestyle, and healthcare industries, our wearable apps help users stay engaged with your brand, offering a convenient, personalized experience that supports their goals and keeps them connected.",
      bannerImage: "/imgs/mobile-consulting-6.png"
    },
    { 
      image: "fa-solid fa-vr-cardboard", 
      text: "AR/VR App Development",
      heading: "AR/VR App Development",
      description: "Take engagement to the next level with AR and VR apps that offer immersive, interactive experiences. At Limegreensapps, we create apps that captivate users in retail, real estate, entertainment, and more, using cutting-edge AR/VR technologies. Our solutions enable users to explore products, locations, or games in a whole new way, enhancing brand presence, boosting user retention, and transforming the digital experience into something unforgettable.",
      bannerImage: "/imgs/mobile-consulting-7.png"
    },
    { 
      image: "fa-solid fa-rocket", 
      text: "Next Gen App Development",
      heading: "Next Gen App Development",
      description: "Lead with innovation through next-gen app development powered by AI, IoT, and blockchain. Limegreensapps designs future-proof applications that enhance user personalization, improve operational efficiency, and unlock new possibilities. Whether it’s an AI-driven recommendation system or IoT-enabled smart home app, our solutions harness advanced technologies to keep you competitive, delivering value that aligns with evolving market trends and user demands.",
      bannerImage: "/imgs/mobile-consulting-1.png"
    },
  ];

  return (
    <div className='bg-[#2A2A2A] pb-6 sm:pb-8 md:pb-10'>
      {/* Services Cards Grid */}
      <div className='bg-[#0071A0] mx-12 px-3 sm:px-4 py-6 sm:py-8 rounded-b-3xl sm:rounded-b-4xl flex justify-center sm:justify-between flex-wrap items-center gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10' data-aos="fade-down" data-aos-delay="100">
        {services.map((service, index) => (
          <ServiceCards 
            key={index}
            image={service.image} 
            text={service.text}
            isActive={index === activeCardIndex}
            onClick={() => setActiveCardIndex(index)}
          />
        ))}
      </div>

      {/* Content Section */}
      <div className='flex flex-col px-4 sm:px-8 md:px-12 lg:px-20'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
          <ServiceBanner 
            heading={services[activeCardIndex].heading}
            description={services[activeCardIndex].description}
            image={services[activeCardIndex].bannerImage}
          />
        </div>
      </div>
    </div>
  )
}

export default Services
