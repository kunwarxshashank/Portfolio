import { Loader } from "@/components/loader"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Expertise } from "@/components/expertise"
import { Projects } from "@/components/projects"
import { Languages } from "@/components/languages"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { MatrixRain } from "@/components/matrix-rain"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Loader />
      <MatrixRain />
      <Navigation />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Languages />
      <Contact />
    </main>
  )
}
