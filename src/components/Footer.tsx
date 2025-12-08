import { Github, Linkedin, Mail, Terminal, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary/10 border border-primary/50 flex items-center justify-center">
                <Terminal className="w-3 h-3 text-primary" />
              </div>
              <span className="font-mono text-sm text-muted-foreground">
                <span className="text-primary">@</span>reddyaman
              </span>
            </div>
            <p className="text-xs font-mono text-muted-foreground flex items-center gap-2">
              <Code className="w-3 h-3 text-primary" />
              © {currentYear} | reddyaman
            </p>
          </div>

          {/* Terminal-style message */}
          <div className="hidden md:block">
            <p className="text-xs font-mono text-muted-foreground">
              <span className="text-primary">$</span> echo "Thanks for visiting!"
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:aman.reddy@example.com", icon: Mail, label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-2 rounded border border-border bg-card/50 hover:border-primary hover:shadow-[0_0_10px_hsl(var(--primary)/0.3)] transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
