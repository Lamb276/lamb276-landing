import React from "react";
import HeroSection from "../components/sections/HeroSection";
import LogoMarquee from "../components/sections/LogoMarquee";
import TeamSection from "../components/sections/TeamSection";
import LambSection from "../components/sections/LambSection";
import JoinDaoSection from "../components/sections/JoinDaoSection";
import VisionSection from "../components/sections/VisionSection";
import SocialSection from "../components/sections/SocialSection";
import InfoSection from "../components/sections/InfoSection";

const Home = () => {
    return (
        <>
            <main>
                <HeroSection />
                <LogoMarquee />
                <TeamSection />
                <LambSection />
                <JoinDaoSection />
                <VisionSection />
                <SocialSection />
                <InfoSection />
            </main>
        </>
    );
};

export default Home;
