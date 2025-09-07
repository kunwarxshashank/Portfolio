import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const expertiseAreas = [
  {
    title: "Linux & DevOps",
    icon: "🐧",
    skills: [
      { name: "Linux Administration", level: 80 },
      { name: "Docker & Kubernetes", level: 60 },
      { name: "CI/CD Pipelines", level: 65 },
      { name: "Infrastructure as Code", level: 90 },
    ],
  },
  {
    title: "Cloud & Networking",
    icon: "☁️",
    skills: [
      { name: "AWS/Azure/GCP", level: 95 },
      { name: "Network Security", level: 80 },
      { name: "Load Balancing", level: 50 },
      { name: "Microservices", level: 10 },
    ],
  },
  {
    title: "Security & Hacking",
    icon: "🔒",
    skills: [
      { name: "Penetration Testing", level: 99 },
      { name: "Vulnerability Assessment", level: 80 },
      { name: "Cryptography", level: 50 },
      { name: "Incident Response", level: 99 },
    ],
  },
  {
    title: "Development",
    icon: "💻",
    skills: [
      { name: "Full-Stack Development", level: 85 },
      { name: "API Design", level: 95 },
      { name: "Database Design", level: 80 },
      { name: "Performance Optimization", level: 75 },
    ],
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <span className="text-primary">&lt;</span>
            Expertise
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-muted-foreground font-mono">$ sudo cat /proc/skills</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card
              key={area.title}
              className="glass-strong p-6 border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{area.icon}</span>
                <h3 className="text-xl font-bold font-mono text-primary">{area.title}</h3>
              </div>

              <div className="space-y-4">
                {area.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-foreground">{skill.name}</span>
                      <span className="text-sm font-mono text-primary">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-muted" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
