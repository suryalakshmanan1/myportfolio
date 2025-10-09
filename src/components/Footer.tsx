import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-display mb-4">
              <span className="text-primary">Surya</span>L
            </h3>
            <p className="text-muted-foreground mb-4">
              Cybersecurity Engineer & Full Stack Developer building secure and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 font-display">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground mb-4">
              <p>Chennai, Tamil Nadu</p>
              <a href="mailto:surya081712@gmail.com" className="hover:text-primary transition-colors block">
                surya081712@gmail.com
              </a>
              <a href="tel:+919629414163" className="hover:text-primary transition-colors block">
                +91 9629414163
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/suryalakshmanan1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/20 border border-border hover:border-primary transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/surya-l-81922a256"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/20 border border-border hover:border-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:surya081712@gmail.com"
                className="p-2 rounded-full bg-muted hover:bg-primary/20 border border-border hover:border-primary transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Surya L. Made with <Heart className="w-4 h-4 text-primary fill-primary" /> and passion for security.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
