import { Terminal } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const skills = {
  backend: [
    { name: "Laravel", level: 95 },
    { name: "PHP", level: 90 },
    { name: "MySQL", level: 85 },
    { name: "RESTful APIs", level: 90 },
  ],
  frontend: [
    { name: "Tailwind CSS", level: 90 },
    { name: "React.js", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "Linux", level: 80 },
    { name: "AWS", level: 70 },
    { name: "CI/CD", level: 75 },
    { name: "PHPUnit", level: 85 },
  ],
};

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedLevel((prev) => {
            if (prev >= level) {
              clearInterval(interval);
              return level;
            }
            return prev + 2;
          });
        }, 20);
        return () => clearInterval(interval);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level, delay]);

  return (
    <div ref={ref} className="space-y-2 group">
      <div className="flex justify-between items-center">
        <span className="text-sm font-mono text-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
        <span className="text-xs text-primary font-mono tabular-nums">
          [{animatedLevel}%]
        </span>
      </div>
      <div className="h-2 bg-border/50 rounded-sm overflow-hidden relative">
        <div
          className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-sm transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${animatedLevel}%` }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </div>
        {/* Grid lines */}
        <div className="absolute inset-0 flex">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex-1 border-r border-background/30 last:border-r-0" />
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const categories = [
    { key: "backend", title: "Backend", data: skills.backend, color: "primary" },
    { key: "frontend", title: "Frontend", data: skills.frontend, color: "accent-foreground" },
    { key: "tools", title: "DevOps & Tools", data: skills.tools, color: "muted-foreground" },
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent w-full"
            style={{
              top: `${20 + i * 20}%`,
              animation: `pulse ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <Terminal className="w-3 h-3 text-primary" />
            <span className="text-primary font-mono text-xs">~/skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono">
            <span className="text-primary">&gt;</span> tech_stack.json
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, catIndex) => (
            <div
              key={category.key}
              className="group bg-card/80 backdrop-blur rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-background/50 border-b border-border">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                </div>
                <span className="text-xs font-mono text-muted-foreground ml-2">
                  {category.key}.sh
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2 font-mono">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.data.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      delay={catIndex * 200 + index * 100}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
