import { ExternalLink, Github, Terminal, Folder, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const news = [
  {
    title: "How Fail2Ban Can Safeguard Your Server from Brute Force Attacks.",
    description:
      "Securing a Linux server is crucial to protect it from unauthorized access and attacks. Fail2Ban is a powerful tool that can help you achieve this. In this article, we'll explore what Fail2Ban is, how it works, and how to set it up on your server.",
    technologies: ["Security","Linux","Brute Force Protection","Server Security"],
    image: "https://media.licdn.com/dms/image/v2/D4D12AQF6lvFTQ5QC-g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1723046421988?e=1769040000&v=beta&t=UbeRgIHypHeuhxrDu-MnbiPbztAa2i4HpepptrFTEAs",
    live: "https://www.linkedin.com/pulse/how-fail2ban-can-safeguard-your-server-from-brute-force-aman-reddy-ywc3f/",
  },
  {
    title: "Password Based vs Key Based Authentication : Which is More Secure for Your Linux server?",
    description:
      "In the world of technology, attackers are constantly trying to gain unauthorized access to the server. Because of this, security is a major concern and choosing the best way to protect the server can be challenging. This article will help you to understand password based and key based authentication methods to improve your security.",
    technologies: ["Authentication Methods", "Linux Security", "SSH", "Cybersecurity", "Authentication"],
    image: "https://media.licdn.com/dms/image/v2/D4D12AQFOzVHch32VFg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1722085878651?e=1769040000&v=beta&t=2hjtXgtp4uzd-jYfn8OsrGkEsoCch-CF9hL_7U4Zi8c",
    github: "#",
    live: "https://www.linkedin.com/pulse/password-based-vs-key-authentication-which-more-secure-aman-reddy-s8cdf/",
  },
  {
    title: "How to Secure phpMyAdmin : A Step-by-Step Guide",
    description:
      "phpMyAdmin is a powerful tool for managing MySQL database through a web interface. but it can also be a security risk if not properly protected. Hackers often target phpMyAdmin to gain access to sensitive data.",
    technologies: ["phpMyAdmin Security", "Database Security", "Access Control", "SQL Injection Prevention", "Security"],
    image: "https://media.licdn.com/dms/image/v2/D4D12AQHhZE61CpuKFw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1738867447110?e=1769040000&v=beta&t=YUKlsll9sNFCLIcizq0223z9z5vtZx1v_Gt67h3e8iM",
    github: "#",
    live: "https://www.linkedin.com/pulse/how-secure-phpmyadmin-step-by-step-guide-aman-reddy-tlhbf/?trackingId=WUKFyUaxQcS414DmRi1guA%3D%3D",
  },
  
];

const News = () => {
  return (
    <section id="Articles" className="py-20 bg-card relative overflow-hidden">
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
            <span className="text-primary font-mono text-xs">~/articles</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono">
            <span className="text-primary">&gt;</span> Technical Articles
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {news.map((news, index) => (
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
                 
                  <span className="text-xs font-mono text-muted-foreground">
                   Dev & Tech Insights by Aman
                  </span>
                </div>
              </div>

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full "
                />
                {/* Overlay with CRT effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Action buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button size="sm" className="shadow-[0_0_15px_hsl(var(--primary)/0.5)]" asChild>
                    <a href={news.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 " />
                      Read More
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 font-mono group-hover:text-primary transition-colors flex items-center gap-2">
                  {news.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                  <span className="text-primary font-mono">//</span> {news.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {news.technologies.map((tech) => (
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

export default News;
