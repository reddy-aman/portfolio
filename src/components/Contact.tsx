import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, MapPin, Phone, Send, Terminal } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSending(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aman.reddy@example.com",
      href: "mailto:aman.reddy@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card relative overflow-hidden">
      {/* Animated grid background */}
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
            <Mail className="w-3 h-3 text-primary" />
            <span className="text-primary font-mono text-xs">~/contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono">
            <span className="text-primary">&gt; $</span> ./Contact.sh
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-background/80 backdrop-blur rounded-lg border border-border p-6 hover:border-primary/50 transition-all duration-300">
              <p className="text-muted-foreground font-mono leading-relaxed">
                <span className="text-primary">//</span> I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 bg-background/80 backdrop-blur rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)]"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono">{item.label}</p>
                    <p className="text-foreground font-mono text-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="pt-4">
              <p className="text-xs text-muted-foreground mb-4 font-mono">
                <span className="text-primary">$</span> find --social-links
              </p>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com", icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-lg bg-background border border-border hover:border-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form - Terminal Style */}
          <div className="bg-background/80 backdrop-blur rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-card/50 border-b border-border">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
              </div>
              <Terminal className="w-3 h-3 text-muted-foreground ml-2" />
              <span className="text-xs font-mono text-muted-foreground">contact_form.sh</span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-mono text-primary">
                  $ enter --name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="font-mono bg-card/50 border-border focus:border-primary focus:shadow-[0_0_10px_hsl(var(--primary)/0.2)]"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono text-primary">
                  $ enter --email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="font-mono bg-card/50 border-border focus:border-primary focus:shadow-[0_0_10px_hsl(var(--primary)/0.2)]"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-primary">
                  $ enter --message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="font-mono bg-card/50 border-border focus:border-primary focus:shadow-[0_0_10px_hsl(var(--primary)/0.2)] resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full gap-2 font-mono shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-shadow"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <span className="animate-pulse">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    ./send_message.sh
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
