import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import News from "@/components/News";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MatrixRain from "@/components/MatrixRain";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <MatrixRain />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
        <News />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
