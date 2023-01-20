'use client'

import { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'

import Toggle from '@/components/Toggle'
import './Navbar.scss'

export default function NavBar({ setIsDarkMode }) {
  const [isOpen, setOpen] = useState(false)

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <nav className='navbar container'>
      <div className='navbar-left'>
        <div className='navbar-left__name'>{`<CjDev544 />`}</div>
        <Toggle setIsDarkMode={setIsDarkMode} />
      </div>
      <div className='navbar-right'>
        <div className={`navbar-right__list ${isOpen ? 'isOpen' : ''}`}>
          <ul>
            <li className='navbar-right__list-item'>
              <a href='#' onClick={closeMenu}>
                Servicios
              </a>
            </li>
            <li className='navbar-right__list-item'>
              <a href='#' onClick={closeMenu}>
                Tecnologías
              </a>
            </li>
            <li className='navbar-right__list-item'>
              <a href='#' onClick={closeMenu}>
                Proyectos
              </a>
            </li>
            <li className='navbar-right__list-item'>
              <a href='#' onClick={closeMenu}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <a href='#' className='button navbar-button' onClick={closeMenu}>
          Contactame
        </a>
        <Hamburger
          direction='right'
          toggled={isOpen}
          toggle={setOpen}
          className='navbar-hamburger'
        />
      </div>
    </nav>
  )
}
