import Hero from '@/components/Hero'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Expertise from '@/components/Expertise'
import Testimonial from '@/components/Testimonial'
import Skills from '@/components/Skills'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Blog from '@/components/Blog'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Expertise />
      <Testimonial />
      <Skills />
      <Pricing />
      <Contact />
      <Blog />
    </main>
  )
}
