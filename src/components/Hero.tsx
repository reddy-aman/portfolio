import amanImage from "@/assets/aman.jpeg";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Terminal } from "lucide-react";
import TypingText from "./TypingText";
import GlitchText from "./GlitchText";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, hsl(var(--foreground)) 1px, hsl(var(--foreground)) 2px)",
            backgroundSize: "100% 4px",
          }}
        />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Terminal prompt */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur border border-primary/30 rounded-lg mb-6 animate-fade-in">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-primary font-mono text-sm">
                <span className="text-muted-foreground">$</span> ./developer --role="
                <TypingText
                  texts={["PHP Laravel Developer"]}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseTime={1500}
                />
                "
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-mono animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Hi, I'm{" "}
              <GlitchText text="Aman Reddy" className="text-primary" />
            </h1>

            <p className="text-lg md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 font-mono leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <span className="text-primary">//</span> I’m a Software Developer with{" "}
              <span className="text-primary font-bold">2+ years</span> of experience specializing in Laravel and PHP, building efficient and scalable web applications using modern technologies.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button size="lg" className="gap-2 group relative overflow-hidden" asChild>
                <a href="#contact">
                  <span className="relative z-10 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Get In Touch
                  </span>
                  <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 border-primary/50 hover:bg-primary/10 hover:border-primary group" asChild>
                <a href="#projects">
                  <span className="font-mono">&lt;</span>
                  View My Work
                  <span className="font-mono">/&gt;</span>
                </a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.8s" }}>
              {[
                { href: "https://github.com/reddy-aman", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/reddyaman/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:reddyaman10@gmail.com", icon: Mail, label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group relative p-3 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative group">
              {/* Rotating border */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary opacity-75 blur-sm group-hover:opacity-100 transition-opacity animate-spin" style={{ animationDuration: "8s" }} />
              
              {/* Glowing ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-primary/50 opacity-50 group-hover:opacity-75 transition-opacity" />
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_40px_hsl(var(--primary)/0.3)]">
                <img
                  src={amanImage}
                  alt="Aman Reddy - Laravel PHP Developer"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                />
                {/* CRT effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none" />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-card/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg border border-primary/30 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-shadow">
                <p className="text-2xl font-bold text-primary font-mono">2+</p>
                <p className="text-xs text-muted-foreground font-mono">Years Exp.</p>
              </div>

              {/* Status indicator */}
              <div className="absolute -top-2 -left-2 flex items-center gap-2 bg-card/90 backdrop-blur px-3 py-1.5 rounded-full border border-primary/30">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-xs font-mono text-primary">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs font-mono text-muted-foreground">scroll</span>
        <ArrowDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
