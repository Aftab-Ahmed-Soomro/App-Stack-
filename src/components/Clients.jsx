import React from "react";
import ClientCard from "../common/ClientCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-black px-4 sm:px-6 md:px-8 lg:px-12 mt-24 sm:mt-28 md:mt-30 lg:mt-32">
      <div className="bg-[#323232] p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 rounded-2xl" data-aos="fade-up" data-aos-delay="100">
        {/* Left Side */}
        <div className="w-full lg:w-[30%] flex flex-col justify-center items-center lg:items-start text-white text-center lg:text-left" data-aos="fade-right" data-aos-delay="200">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-xl lg:max-w-none">
            What Clients Are Saying About us
          </h1>
          <p className="text-xs sm:text-sm mt-4 sm:mt-6 md:mt-8 max-w-2xl lg:max-w-none">
            1000+ clients served globally in the past 10 years. Discover how
            we've helped businesses achieve their goals, exceed expectations,
            and unlock new potential. Hear from those who trusted us to bring
            their vision to life.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[65%] py-6 sm:py-8 md:py-12 lg:py-20 flex flex-col gap-4 sm:gap-6 md:gap-8" data-aos="fade-left" data-aos-delay="300" >
          <ClientCard 
            name="A.David" 
            designation="Operations Head, Oaks" 
            paragraph="Got to know about them via a friend. The onboarding process was very smooth and the quote price was budget friendly. The app was delivered on time and I am quite satisfied with the results." 
            img="/imgs/user-1.png" 
            bgColor="#ffffff" 
            color="black" 
          />
          <ClientCard 
            name="Tanya Ginni" 
            designation="COO, Matchbox" 
            paragraph="They helped my get an investor onboard too. Even helped me with the investor pitch and research. I owe them for my app funding. Totally in love with the company! Jane was a pleasure working with. I might go for their marketing services too. If someone is reading this, a word of advice, ask them for a marketing plan too to go with your app; they'll do it for a very nominal fee." 
            img="/imgs/user-2.png" 
            bgColor="#0071A0" 
            color="#ffffff" 
          />
          <ClientCard 
            name="Kristian Klopp" 
            designation="CMO, Ahyon" 
            paragraph="The mobile application that the Limegreenapps team created was great for my business and delivered exactly what I had hoped for. I'm going to tell everyone I know about their services!" 
            img="/imgs/user-3.png" 
            bgColor="#ffffff" 
            color="black" 
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
