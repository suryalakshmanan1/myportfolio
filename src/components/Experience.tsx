import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Cybersecurity Intern",
      company: "AURISEG",
      type: "Internship",
      duration: "June 2024 - 2025",
      location: "India",
      description: "Year-long internship at a cybersecurity company focusing on real-world security operations and penetration testing.",
      responsibilities: [
        "Conducting vulnerability assessments and penetration testing on web applications",
        "Working with security tools like Burp Suite, Nmap, and Metasploit",
        "Participating in security operations center (SOC) activities",
        "Learning advanced cybersecurity techniques and best practices",
        "Contributing to security reports and documentation"
      ],
      skills: ["VAPT", "Penetration Testing", "Security Operations", "Vulnerability Assessment", "Security Tools"]
    },
    {
      role: "Virtual Intern",
      company: "Novitec",
      type: "Virtual Internship",
      duration: "2024",
      location: "Remote",
      description: "Virtual internship focused on cybersecurity fundamentals and practical applications.",
      responsibilities: [
        "Completed cybersecurity training modules",
        "Worked on security assessment projects",
        "Learned industry-standard security practices",
        "Collaborated with remote team members on security tasks"
      ],
      skills: ["Cybersecurity", "Network Security", "Security Analysis"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-display">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Gaining hands-on experience in cybersecurity and development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-6 sm:p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1 font-display">{exp.role}</h3>
                    <p className="text-xl text-primary font-semibold">{exp.company}</p>
                  </div>
                </div>
                <Badge className="bg-secondary/20 text-secondary border-secondary/30 w-fit">
                  {exp.type}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  {exp.duration}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {exp.location}
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold mb-3 text-foreground">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start text-muted-foreground">
                      <span className="text-primary mr-2 mt-1">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-foreground">Skills Developed:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline"
                      className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
