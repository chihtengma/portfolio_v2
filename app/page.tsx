import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full overflow-y-auto bg-[#FAF0CA]">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
