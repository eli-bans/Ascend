import { useEffect } from 'react'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Gallery from './components/Gallery'
import Features from './components/Features'
import Residences from './components/Residences'
import Rooftop from './components/Rooftop'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <div className="bg-black text-offwhite min-h-screen">
      <Cursor />
      <Nav />
      <Hero />
      <Intro />
      <Gallery />
      <Features />
      <Residences />
      <Rooftop />
      <Contact />
      <Footer />
    </div>
  )
}
