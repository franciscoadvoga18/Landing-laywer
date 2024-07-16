import { About } from "@/components/About";
import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonial } from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
