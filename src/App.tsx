import Nav from "./components/Nav";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <LogoStrip />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
