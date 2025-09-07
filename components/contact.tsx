"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const mailtoLink = `mailto:kunwarxshashank@gmail.com
    ?subject=${encodeURIComponent(formData.subject)}
    &body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

  window.location.href = mailtoLink;
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            <span className="text-primary">&lt;</span>
            Contact
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-muted-foreground font-mono">$ echo "Let's build something amazing together"</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glass-strong p-6 border-border">
              <h3 className="text-xl font-bold font-mono text-primary mb-4">Get In Touch</h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Ready to collaborate on your next project? Whether you need a full-stack developer, DevOps engineer,
                  or security consultant, I'm here to help bring your ideas to life.
                </p>
                <p className="leading-relaxed">
                  I specialize in building scalable, secure applications and can help with everything from architecture
                  design to deployment and monitoring.
                </p>
              </div>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-4">
              <Card className="glass p-4 border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary">📧</span>
                  </div>
                  <div>
                    <div className="font-mono text-sm text-primary">Email</div>
                    <div className="font-mono text-sm text-muted-foreground">kunwarxshashank@gmail.com</div>
                  </div>
                </div>
              </Card>
            
            {/* 
              <Card className="glass p-4 border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <span className="text-accent">💼</span>
                  </div>
                  <div>
                    <div className="font-mono text-sm text-accent">LinkedIn</div>
                    <div className="font-mono text-sm text-muted-foreground">linkedin.com/in/kunwarxshashank</div>
                  </div>
                </div>
              </Card> 
            */}

              <Card className="glass p-4 border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-chart-3/20 rounded-lg flex items-center justify-center">
                    <span className="text-chart-3">🐙</span>
                  </div>
                  <div>
                    <div className="font-mono text-sm text-chart-3">GitHub</div>
                    <div className="font-mono text-sm text-muted-foreground">github.com/kunwarxshashank</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-strong p-6 border-border">
            <div className="mb-4">
              <div className="font-mono text-primary text-sm">root@highrisk:~# send-message</div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="glass border-border font-mono placeholder:text-muted-foreground focus:border-primary"
                  required
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="youremail@domain.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="glass border-border font-mono placeholder:text-muted-foreground focus:border-primary"
                  required
                />
              </div>

              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="glass border-border font-mono placeholder:text-muted-foreground focus:border-primary"
                  required
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="glass border-border font-mono placeholder:text-muted-foreground focus:border-primary resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full font-mono bg-primary text-primary-foreground hover:bg-primary/90 glow-pulse"
              >
                Send Message
              </Button>
            </form>

            <div className="mt-4 font-mono text-xs text-muted-foreground">Message sent successfully! ✓</div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <div className="font-mono text-sm text-muted-foreground">
            <div className="text-primary">root@highrisk:~# uptime</div>
            <div className="mt-2">Built with ❤️ using React, Next.js, Three.js & Tailwind CSS</div>
            <div className="mt-2">© 2024 KUNWARXSHASHANK AKA HIGHRISK. All rights reserved.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
