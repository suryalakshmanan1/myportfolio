import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Cybersecurity",
      color: "text-primary",
      skills: [
        "OWASP Top 10",
        "VAPT",
        "Web Application Pentesting",
        "Network Penetration Testing",
        "Linux",
        "Nessus",
        "Nmap",
        "Wireshark",
        "Burp Suite",
        "Metasploit",
        "SOC (CrowdStrike)",
        "Cisco",
        "Nikto",
        "Hunter.io"
      ]
    },
    {
      category: "Programming Languages",
      color: "text-secondary",
      skills: [
        "Python",
        "C",
        "SQL",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript"
      ]
    },
    {
      category: "Frameworks & Tools",
      color: "text-primary",
      skills: [
        "GitHub",
        "Git",
        "Google Colab",
        "Bootstrap",
        "Docker",
        "GitHub Actions",
        "CI/CD",
        "DevOps"
      ]
    },
    {
      category: "Cloud & AI",
      color: "text-secondary",
      skills: [
        "Google Cloud",
        "Cloud Computing",
        "Generative AI",
        "Reinforcement Learning",
        "Machine Learning Basics"
      ]
    },
    {
      category: "Soft Skills",
      color: "text-primary",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Communication",
        "Critical Thinking",
        "Research",
        "Documentation",
        "Leadership"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-display">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building secure and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className={`text-xl font-bold mb-4 font-display ${category.color} group-hover:scale-105 transition-transform`}>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-muted hover:bg-primary/20 hover:text-primary border border-border hover:border-primary/50 transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
            <p className="text-lg font-semibold mb-2">Always Learning</p>
            <p className="text-muted-foreground">
              Continuously expanding my skill set with emerging technologies and security practices
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
