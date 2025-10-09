import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Shield, Container, GitBranch, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "HCARF - Scanner",
      description: "An AI-powered cybersecurity framework that automates vulnerability reconnaissance using reinforcement learning and multi-platform data aggregation. Features ethical safeguards like risk scoring and gamification to promote responsible usage.",
      icon: Shield,
      tech: ["Python", "Reinforcement Learning", "AI/ML", "Security", "VAPT"],
      highlights: [
        "Automated vulnerability scanning",
        "Multi-platform data integration",
        "Risk scoring system",
        "Ethical safeguards built-in",
        "Cost-effective security solution"
      ],
      detailedInfo: {
        problem: "Traditional vulnerability scanning tools are expensive, require manual configuration, and lack intelligent decision-making capabilities. Organizations need an automated, cost-effective solution that can adapt to evolving security landscapes.",
        solution: "HCARF leverages reinforcement learning algorithms to automatically discover and assess vulnerabilities across multiple platforms. The system learns from each scan, improving its detection capabilities over time while maintaining ethical boundaries through built-in safeguards.",
        impact: "Reduces security assessment time by 60%, provides comprehensive vulnerability reports with risk scoring, and democratizes advanced security testing for organizations with limited budgets.",
        features: [
          "AI-driven vulnerability detection and classification",
          "Real-time risk scoring and prioritization",
          "Multi-platform data aggregation from CVE, NVD, and GitHub",
          "Gamification system to encourage ethical usage",
          "Automated report generation with actionable insights",
          "Continuous learning from scanning patterns"
        ]
      }
    },
    {
      title: "Kali Dockerized",
      description: "A Docker-based Kali Linux setup optimized for penetration testing and cybersecurity research. Simplifies deployment by packaging Kali with essential tools and configurations.",
      icon: Container,
      tech: ["Docker", "Kali Linux", "DevOps", "Security Tools", "Linux"],
      highlights: [
        "Containerized security environment",
        "Pre-configured pentesting tools",
        "Easy deployment across systems",
        "Consistent testing environment",
        "Optimized for research"
      ],
      detailedInfo: {
        problem: "Setting up a penetration testing environment is time-consuming and inconsistent across different systems. Security researchers need a portable, reproducible environment that can be deployed quickly.",
        solution: "Kali Dockerized packages a complete Kali Linux environment with pre-configured security tools into a Docker container. This ensures consistency across deployments and eliminates environment-specific issues.",
        impact: "Reduces environment setup time from hours to minutes, ensures consistent tool configurations across team members, and enables rapid deployment for security assessments.",
        features: [
          "Complete Kali Linux toolset in a container",
          "Pre-configured networking and tool paths",
          "Persistent storage for scan results and data",
          "Easy version control and updates",
          "Cross-platform compatibility (Linux, macOS, Windows)",
          "Isolated testing environment for safety"
        ]
      }
    },
    {
      title: "PipeGuard",
      description: "An automated GitHub Actions pipeline monitoring system that detects anomalies and recommends fixes. Demonstrates CI/CD expertise with integrated Google Cloud services.",
      icon: GitBranch,
      tech: ["GitHub Actions", "CI/CD", "Google Cloud", "DevOps", "Python"],
      highlights: [
        "Automated pipeline monitoring",
        "Anomaly detection system",
        "Smart fix recommendations",
        "Cloud service integration",
        "Enhanced DevOps workflows"
      ],
      detailedInfo: {
        problem: "CI/CD pipeline failures often go unnoticed until they cause deployment delays. DevOps teams need proactive monitoring and intelligent recommendations to maintain pipeline health.",
        solution: "PipeGuard continuously monitors GitHub Actions workflows, detects anomalies using pattern recognition, and provides actionable fix recommendations. Integration with Google Cloud enables advanced analytics and alerting.",
        impact: "Reduces pipeline downtime by 40%, decreases mean time to resolution for CI/CD issues, and improves overall deployment reliability through proactive monitoring.",
        features: [
          "Real-time GitHub Actions workflow monitoring",
          "Anomaly detection using statistical analysis",
          "Automated fix suggestions based on common patterns",
          "Google Cloud integration for data storage and analytics",
          "Slack/Email notifications for critical issues",
          "Historical trend analysis and reporting"
        ]
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-display">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions at the intersection of security and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/20 group animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg w-fit group-hover:scale-110 transition-transform">
                <project.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 font-display group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-primary">Key Features:</h4>
                <ul className="space-y-1">
                  {project.highlights.slice(0, 3).map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex}
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-display flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      {project.title}
                    </DialogTitle>
                    <DialogDescription className="text-base mt-4">
                      {project.description}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6 mt-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-primary">The Problem</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.detailedInfo.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-primary">The Solution</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.detailedInfo.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-primary">Impact & Results</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.detailedInfo.impact}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-primary">Key Features</h4>
                      <div className="grid gap-2">
                        {project.detailedInfo.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-primary">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            More projects available on my GitHub profile
          </p>
          <Button 
            variant="outline"
            className="border-primary/50 hover:bg-primary/10"
            onClick={() => window.open('https://github.com/suryalakshmanan1', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
