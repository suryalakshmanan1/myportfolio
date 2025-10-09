import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Trophy, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech - Information Technology",
      institution: "Jeppiaar Institute of Technology",
      location: "Kanchipuram, Tamil Nadu",
      duration: "2022 - 2026",
      score: "CGPA: 7.68 (till 6th Semester)",
      description: "Specializing in cybersecurity, full-stack development, and AI applications. Active participant in technical events and paper presentations.",
      icon: GraduationCap
    },
    {
      degree: "12th Grade",
      institution: "Crescent Matric Hr. Sec. School",
      location: "Krishnagiri, Tamil Nadu",
      duration: "2020 - 2022",
      score: "85.66%",
      description: "Focused on science and mathematics with strong foundation in computer science fundamentals.",
      icon: BookOpen
    },
    {
      degree: "10th Grade",
      institution: "Crescent Matric Hr. Sec. School",
      location: "Krishnagiri, Tamil Nadu",
      duration: "2019 - 2020",
      score: "99%",
      description: "Excellent academic performance with distinction in mathematics and science subjects.",
      icon: BookOpen
    }
  ];

  const certifications = [
    {
      title: "Foundations of Cyber Security",
      issuer: "Google",
      category: "Cybersecurity"
    },
    {
      title: "Cyber Security Tools and Technologies",
      issuer: "Microsoft",
      category: "Cybersecurity"
    },
    {
      title: "Database Management System",
      issuer: "NPTEL",
      category: "Computer Science"
    },
    {
      title: "Ethical Hacking",
      issuer: "NPTEL",
      category: "Cybersecurity"
    },
    {
      title: "Cloud Computing",
      issuer: "Great Learning",
      category: "Cloud"
    },
    {
      title: "Generative AI",
      issuer: "Great Learning",
      category: "AI/ML"
    },
    {
      title: "Python Programming",
      issuer: "Great Learning",
      category: "Programming"
    },
    {
      title: "Advanced Cyber Security",
      issuer: "Great Learning",
      category: "Cybersecurity"
    }
  ];

  const achievements = [
    {
      title: "First Prize - Paper Presentation",
      event: "EMBEDIOT Conference",
      description: "Won first prize in technical paper presentation showcasing research in embedded systems and IoT security"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-display">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 font-display flex items-center gap-3">
            <GraduationCap className="text-primary" />
            Academic Background
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <edu.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-xl font-bold font-display">{edu.degree}</h4>
                        <p className="text-primary font-semibold">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.location}</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-2">
                          {edu.duration}
                        </Badge>
                        <p className="text-sm font-semibold text-primary">{edu.score}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 font-display flex items-center gap-3">
            <Trophy className="text-primary" />
            Achievements
          </h3>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold mb-1">{achievement.title}</h4>
                    <p className="text-primary font-semibold mb-2">{achievement.event}</p>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 font-display flex items-center gap-3">
            <Award className="text-primary" />
            Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="p-4 bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Badge 
                  variant="outline" 
                  className="mb-3 border-primary/30 text-primary group-hover:bg-primary/10"
                >
                  {cert.category}
                </Badge>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors leading-tight">
                  {cert.title}
                </h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
            <p className="text-lg font-semibold mb-2">Lifelong Learner</p>
            <p className="text-muted-foreground">
              Continuously pursuing new certifications and expanding technical expertise
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
