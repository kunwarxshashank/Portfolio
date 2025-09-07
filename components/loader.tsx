"use client"

import { useEffect, useState } from "react"

export function Loader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        {/* Terminal-style loader */}
        <div className="font-mono text-primary text-2xl">
          <div className="terminal-cursor">root@highrisk:~# initializing</div>
        </div>

        {/* Progress bar */}
        <div className="w-80 h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 glow-pulse"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading text */}
        <div className="font-mono text-sm text-muted-foreground">Loading $whoami... {Math.round(progress)}%</div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
