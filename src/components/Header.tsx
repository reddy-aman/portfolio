import { Button } from "@/components/ui/button";
import { Menu, Terminal, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#Articles", label: "Articles" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-primary/20 shadow-[0_0_20px_hsl(var(--primary)/0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-primary/10 border border-primary/50 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all duration-300">
              <Terminal className="w-4 h-4 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground font-mono">
              <span className="text-primary">@</span>reddyaman
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">./</span>
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
            <Button size="sm" className="ml-4 font-mono gap-1 shadow-[0_0_15px_hsl(var(--primary)/0.3)]" asChild>
              <a href="#contact">
                <span className="text-primary-foreground">&gt;</span> Hire_Me
              </a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-mono text-muted-foreground hover:text-primary hover:bg-primary/5 rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-primary">./</span>{link.label}
                </a>
              ))}
              <Button size="sm" asChild className="mt-2 w-fit font-mono">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  <span className="text-primary-foreground">&gt;</span> Hire_Me
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
