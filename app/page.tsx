"use client";
import { useRef } from "react";
import Hero from "@/components/Hero";
import ProfileSection from "@/components/ProfileSection";
import AboutMe from "@/components/AboutMe";
import MyJourney from "@/components/MyJourney";
import WorkGallery from "@/components/WorkGallery";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// GSAP Imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Register GSAP plugins
gsap.registerPlugin(ScrollSmoother);

export default function Home() {
  const mainContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
    });

    return () => {
      smoother.kill();
    };
  }, { scope: mainContainerRef });

  return (
    <div ref={mainContainerRef}>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="relative overflow-x-hidden">
            <Hero />
            <ProfileSection />
            <AboutMe />
            <MyJourney />
            {/* <WorkGallery /> */}
            <Certificates />
            <Skills />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
