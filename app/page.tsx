import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import MyJourney from "@/components/MyJourney";
import WorkGallery from "@/components/WorkGallery";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <MyJourney />
      <WorkGallery />
      <Certificates />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
