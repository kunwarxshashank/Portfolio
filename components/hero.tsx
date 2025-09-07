"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"

function Stars() {
  const ref = useRef<any>()
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 })

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#00ff88" size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 z-10">
        <div className="scan-line absolute top-1/2 h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center space-y-8 px-6">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold font-mono">
            <span className="text-primary neon-text">&gt;</span>
            <span className="text-foreground">_</span>
            <span className="text-accent">HIGHRISK -_+</span>
          </h1>

          <div className="font-mono text-xl md:text-2xl text-muted-foreground">
            <span className="text-primary">$</span> whoami
          </div>

          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Full-Stack Developer • Linux Enthusiast • Cloud Architect • Security Researcher
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 glow-pulse"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="font-mono border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>

        {/* Terminal prompt */}
        <div className="glass rounded-lg p-4 max-w-md mx-auto font-mono text-sm text-left">
          <div className="text-primary">root@highrisk:~# cat skills.txt</div>
          <div className="text-muted-foreground mt-2">
            Linux • Cloud • MERN • React Native • Java • Social Engineering • Pentesting
          </div>
          <div className="text-primary mt-2 terminal-cursor">root@highrisk:~#</div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-60 float-animation" />
      <div
        className="absolute bottom-32 right-16 w-6 h-6 bg-accent rounded-full opacity-40 float-animation"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/3 right-8 w-3 h-3 bg-chart-3 rounded-full opacity-50 float-animation"
        style={{ animationDelay: "4s" }}
      />
    </section>
  )
}
