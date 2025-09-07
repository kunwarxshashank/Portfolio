import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "CloudSecure Dashboard",
    description:
      "Real-time security monitoring dashboard for cloud infrastructure with threat detection and automated response capabilities.",
    image: "/cybersecurity-dashboard.png",
    tech: ["React", "Node.js", "AWS", "Docker", "Redis"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "DevOps Automation Suite",
    description:
      "Complete CI/CD pipeline automation with Kubernetes deployment, monitoring, and rollback capabilities.",
    image: "/devops-automation-interface.png",
    tech: ["Python", "Kubernetes", "Jenkins", "Terraform", "Grafana"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Network Penetration Toolkit",
    description: "Comprehensive penetration testing toolkit with automated vulnerability scanning and reporting.",
    image: "/network-security-testing.png",
    tech: ["Python", "Bash", "Nmap", "Metasploit", "SQLMap"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Microservices E-Commerce",
    description: "Scalable e-commerce platform built with microservices architecture and event-driven design.",
    image: "/placeholder-jucle.png",
    tech: ["Go", "React", "PostgreSQL", "RabbitMQ", "Docker"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Linux System Monitor",
    description:
      "Advanced system monitoring tool with real-time metrics, alerting, and performance optimization suggestions.",
    image: "/linux-monitoring-terminal.png",
    tech: ["C++", "Python", "InfluxDB", "Grafana", "Systemd"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Blockchain Security Auditor",
    description: "Smart contract security auditing tool with automated vulnerability detection and gas optimization.",
    image: "/blockchain-security-code-analysis.png",
    tech: ["Solidity", "Web3.js", "Node.js", "React", "Hardhat"],
    github: "#",
    demo: "#",
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <span className="text-primary">&lt;</span>
            Projects
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-muted-foreground font-mono">$ ls -la ~/projects/</p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-mono text-accent mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <Card
                  key={project.title}
                  className="glass-strong border-border overflow-hidden group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold font-mono text-primary mb-2">{project.title}</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-mono text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button size="sm" className="font-mono bg-primary text-primary-foreground hover:bg-primary/90">
                        View Code
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="font-mono border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                      >
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold font-mono text-accent mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <Card
                  key={project.title}
                  className="glass border-border overflow-hidden group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="text-lg font-bold font-mono text-primary mb-2">{project.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-mono text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="secondary" className="font-mono text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="font-mono text-xs bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Code
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="font-mono text-xs border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                      >
                        Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
