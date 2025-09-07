import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <span className="text-primary">&lt;</span>
            About
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full glass-strong p-4 glow-pulse">
                <img
                  src="/cyberpunk-developer-avatar.png"
                  alt="Developer Avatar"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full animate-pulse" />
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <Card className="glass p-6 border-border">
              <h3 className="text-2xl font-bold font-mono text-primary mb-4">$ cat about.md</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Passionate full-stack developer with a deep love for Linux systems, cloud architecture, and
                  cybersecurity. I thrive in the terminal and believe that elegant code is the foundation of great
                  software.
                </p>
                <p>
                  When I'm not crafting scalable applications or exploring the latest in containerization, you'll find
                  me contributing to open-source projects or diving deep into network security research.
                </p>
              </div>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass p-4 text-center border-border">
                <div className="text-2xl font-bold text-primary font-mono">0b101</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="glass p-4 text-center border-border">
                <div className="text-2xl font-bold text-accent font-mono">0b1010+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
