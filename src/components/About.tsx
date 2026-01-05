import { Code2, Database, Globe, Zap, Terminal, ChevronRight } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices and design patterns.",
    command: "git commit -m 'clean'",
  },
  {
    icon: Database,
    title: "Database Expert",
    description: "Proficient in MySQL with optimized queries and schema design.",
    command: "mysql --optimize",
  },
  {
    icon: Globe,
    title: "Deployment Expertise",
    description: "Deployment of applications on Linux servers and cloud platforms (AWS, DigitalOcean), ensuring smooth, scalable hosting.",
    command: "Nginx, Apache, Docker",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed, scalability, and exceptional user experience.",
    command: "npm run build",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <Terminal className="w-3 h-3 text-primary" />
            <span className="text-primary font-mono text-xs">~/about</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono">
            <span className="text-primary">&gt;</span> About.me
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal-style About Text */}
          <div className="bg-background/80 backdrop-blur border border-border rounded-lg overflow-hidden shadow-[0_0_30px_hsl(var(--primary)/0.1)]">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-destructive/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-primary/80" />
              </div>
              <span className="text-xs font-mono text-muted-foreground ml-2">about.md</span>
            </div>
            
            {/* Terminal content */}
            <div className="p-6 font-mono text-sm space-y-4">
              <div className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  I'm a dedicated <span className="text-primary">Laravel & PHP developer</span> with over 
                  3 years of hands-on experience in building robust, scalable web applications.
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  My journey in web development started with a curiosity for how things work 
                  behind the scenes, and it has evolved into a passion for creating{" "}
                  <span className="text-primary">elegant solutions</span>.
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in the <span className="text-primary">Laravel ecosystem</span>, developing RESTful APIs, implementing authentication systems, and integrating third-party services.
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-muted-foreground">
                  <span className="text-primary">$</span> cat interests.txt
                </p>
                <p className="text-foreground mt-2">
                  ["open-source", "new-technologies", "problem-solving", "clean-architecture"]
                </p>
              </div>
            </div>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-background/80 backdrop-blur rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-mono">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.description}
                </p>
                <code className="text-xs text-primary/70 font-mono bg-primary/5 px-2 py-1 rounded">
                  {item.command}
                </code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
