import { Briefcase, Calendar, Terminal, GitBranch } from "lucide-react";

const experiences = [
  {
    title: "Research Scientist (IT)",
    company: "Society for Applied Microwave Electronics Engineering & Research",
    period: "2023 - Present",
    description: [
      "Developing web applications using PHP & Laravel.",
      "Creating REST APIs and adding third-party integrations like payment gateways and SMS gateways.",
      "Hosting websites on Linux servers (Ubuntu, Debian, CentOS).",
      "Setting up and managing Apache and Nginx web servers.",
      "Using Git and GitLab CI/CD for version control and automatic deployments.",
      "Configuring reverse proxy and DNS for domains and subdomains.",
      "Installing and renewing SSL certificates to keep websites secure.",
      "Working with Docker for deploying and testing applications.",
      "Writing bash scripts and scheduling tasks with cron jobs for automation.",
    ],
    status: "current",
  },
  
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Background code lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <pre className="text-primary font-mono text-xs whitespace-pre-wrap p-8">
          {`
class Developer extends Professional {
  private $skills = ['Laravel', 'PHP', 'MySQL'];
  private $experience = 3;
  
  public function build($project) {
    return $this->architect($project)
                ->develop()
                ->test()
                ->deploy();
  }
}
          `.repeat(10)}
        </pre>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-4">
           
            <span className="text-primary font-mono text-xs">~/experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono">
            <span className="text-primary">&gt; $</span>  cat experience.txt 
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line with glow */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative mb-12 last:mb-0 pl-12 md:pl-20"
              >
                {/* Timeline node */}
                <div className="absolute left-2 md:left-6 w-4 h-4 rounded-full border-2 border-primary bg-background shadow-[0_0_15px_hsl(var(--primary)/0.5)] z-10">
                  {exp.status === "current" && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                </div>
                
                {/* Content card */}
                <div className="group bg-card/80 backdrop-blur rounded-lg border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-background/50 border-b border-border">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-destructive/70" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                      <span className="w-2 h-2 rounded-full bg-primary/70" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground ml-2">
                      experience_{String(index + 1).padStart(2, "0")}
                    </span>
                    {exp.status === "current" && (
                      <span className="ml-auto text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                        experience.txt
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground font-mono">
                        {exp.title}
                      </h3>
                    </div>
                    
                    <p className="text-primary font-medium mb-2 font-mono text-sm">
                      @ {exp.company}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 font-mono">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2 font-mono">
                          <span className="text-primary flex-shrink-0">+</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
