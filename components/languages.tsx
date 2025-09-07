import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const categories = [
  {
    title: "Programming Languages",
    icon: "⚡",
    items: [
      { name: "Html/Css", level: "Advanced", color: "bg-yellow-500" },
      { name: "C++", level: "Advanced", color: "bg-purple-500" },
      { name: "JavaScript/TypeScript", level: "Intermediate", color: "bg-yellow-500" },
      { name: "Java", level: "Intermediate", color: "bg-orange-500" }
    ],
  },
  {
    title: "Frontend Frameworks",
    icon: "🎨",
    items: [
      { name: "React/Next.js", level: "Advanced", color: "bg-blue-400" },
      { name: "Expo", level: "Intermediate", color: "bg-white-400" },
      { name: "React Native", level: "Intermediate", color: "bg-blue-600" },
      { name: "Tailwind CSS", level: "Intermediate", color: "bg-teal-400" },
    ],
  },
  {
    title: "Backend & Databases",
    icon: "🗄️",
    items: [
      { name: "Node.js/Express", level: "Intermediate", color: "bg-green-600" },
      { name: "MySQL", level: "Beginner", color: "bg-blue-600" },
      { name: "MongoDB", level: "Advanced", color: "bg-green-700" }
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    items: [
      { name: "Cloud", level: "Advanced", color: "bg-orange-600" },
      { name: "Docker", level: "Beginner", color: "bg-blue-500" },
      { name: "Kubernetes", level: "Beginner", color: "bg-blue-600" },
      { name: "Nginx", level: "Beginner", color: "bg-green-600" },
    ],
  },
  {
    title: "Tools",
    icon: "🔐",
    items: [
      { name: "Postman", level: "Advanced", color: "bg-orange-500" },
      { name: "Burp Suite", level: "Advanced", color: "bg-orange-600" },
      { name: "Metasploit", level: "Advanced", color: "bg-red-600" },
      { name: "Wireshark", level: "Intermediate", color: "bg-blue-500" }
    ],
  },
  {
    title: "Operating Systems",
    icon: "🐧",
    items: [
      { name: "Linux (Ubuntu)", level: "Expert", color: "bg-yellow-600" },
      { name: "Linux (Fedora)", level: "Expert", color: "bg-blue-400" },
      { name: "Windows Server", level: "Intermediate", color: "bg-blue-600" }
    ],
  },
]

export function Languages() {
  return (
    <section id="languages" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <span className="text-primary">&lt;</span>
            Skills & Technologies
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-muted-foreground font-mono">$ cat /etc/skills.conf</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={category.title}
              className="glass-strong p-6 border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-lg font-bold font-mono text-primary">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-2 rounded-lg glass hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="font-mono text-sm text-foreground">{item.name}</span>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`font-mono text-xs ${
                        item.level === "Expert"
                          ? "bg-primary/20 text-primary"
                          : item.level === "Advanced"
                            ? "bg-accent/20 text-accent"
                            : "bg-muted/20 text-muted-foreground"
                      }`}
                    >
                      {item.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Terminal output style summary */}
        <Card className="glass-strong p-6 mt-12 border-border">
          <div className="font-mono text-sm">
            <div className="text-primary mb-2">root@highrisk:~# skill-summary --verbose</div>
            <div className="text-muted-foreground space-y-1">
              <div>→ Total Technologies: 20+</div>
              <div>→ Years of Experience: 5+</div>
              <div>→ Certifications: CISCO Networking Academy</div>
              <div>→ Preferred Stack: React + Node.js + React Native + Java + AWS</div>
              <div>→ Current Focus: Docker, Microservices, Kubernetes</div>
            </div>
            <div className="text-primary mt-4 terminal-cursor">root@highrisk:~#</div>
          </div>
        </Card>
      </div>
    </section>
  )
}
