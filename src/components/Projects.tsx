import { ExternalLink, Github, Terminal, Folder, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with product management, cart system, payment integration (Stripe), and order tracking. Built with Laravel and Vue.js.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Stripe", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Project Management Tool",
    description:
      "A collaborative project management application with real-time updates, task assignments, file sharing, and team communication features.",
    technologies: ["Laravel", "Livewire", "PostgreSQL", "Redis", "Alpine.js"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Healthcare API",
    description:
      "RESTful API for a healthcare platform handling patient records, appointments, and medical history with strict security and HIPAA compliance.",
    technologies: ["Laravel", "PHP", "MySQL", "JWT", "Docker"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <Folder className="w-3 h-3 text-primary" />
            <span className="text-primary font-mono text-xs">~/projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono">
            <span className="text-primary">&gt;</span> Featured_Projects
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-background/80 backdrop-blur rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
            >
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-2 bg-card/50 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                  </div>
                  <Code className="w-3 h-3 text-muted-foreground ml-2" />
                  <span className="text-xs font-mono text-muted-foreground">
                    project_{String(index + 1).padStart(2, "0")}.php
                  </span>
                </div>
              </div>

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[50%] group-hover:grayscale-0"
                />
                {/* Overlay with CRT effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Action buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button size="sm" variant="secondary" className="backdrop-blur border border-border hover:border-primary" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="shadow-[0_0_15px_hsl(var(--primary)/0.5)]" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 font-mono group-hover:text-primary transition-colors flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-primary" />
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                  <span className="text-primary font-mono">//</span> {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
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

export default Projects;
