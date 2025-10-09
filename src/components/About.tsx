import { Code2, Shield, Brain, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Cybersecurity Expert",
      description: "Specialized in VAPT, penetration testing, and building secure applications"
    },
    {
      icon: Code2,
      title: "Full-Stack Developer",
      description: "Proficient in building scalable web applications from frontend to backend"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Experience in AI-powered security frameworks and intelligent systems"
    },
    {
      icon: Rocket,
      title: "Problem Solver",
      description: "Transforming complex security challenges into innovative solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-display">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building the future of secure digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 font-display">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                I'm a passionate IT student currently pursuing my B.Tech in Information Technology 
                at Jeppiaar Institute of Technology, with a strong focus on cybersecurity and 
                full-stack development. With a CGPA of 7.68, I've maintained a solid academic record 
                while actively building real-world projects.
              </p>
              <p className="leading-relaxed">
                My journey in technology started with a fascination for how systems work and how 
                to make them more secure. This led me to explore the intersection of cybersecurity, 
                web development, and artificial intelligence, where I found my true calling.
              </p>
              <p className="leading-relaxed">
                Currently interning at AURISEG, a cybersecurity company, I'm gaining hands-on 
                experience in penetration testing, vulnerability assessment, and security operations. 
                I'm committed to continuous learning and contributing to real-world technology 
                solutions that make a difference.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-up">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 cursor-pointer group"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 font-display">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 sm:p-12 border border-primary/20 animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-6 text-center font-display">Career Goals</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">7.68</div>
              <p className="text-muted-foreground">CGPA (6th Semester)</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">10+</div>
              <p className="text-muted-foreground">Certifications</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <p className="text-muted-foreground">Major Projects</p>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
            I'm seeking opportunities to apply my skills in building scalable, secure, and 
            user-friendly applications. My goal is to become a leading cybersecurity professional 
            who bridges the gap between security and seamless user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
