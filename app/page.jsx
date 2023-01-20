'use client'

import { useState } from 'react'

import About from '@/components/About'
import Services from '@/components/Services'
import NavBar from '@/components/NavBar'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import '../scss/index.scss'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <div
      style={{
        background: isDarkMode && '#000',
        color: isDarkMode && '#fff',
      }}
    >
      <header>
        <NavBar setIsDarkMode={setIsDarkMode} />
      </header>
      <main>
        <About isDarkMode={isDarkMode} />
        <Services isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}
