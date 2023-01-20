'use client'

import Image from 'next/image'
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

import Wave from '@/public/images/wave.png'
import './Footer.scss'

export default function Footer({ isDarkMode }) {
  return (
    <footer className='footer'>
      <Image
        src={Wave}
        className='footer-background'
        height={400}
        alt='fotter'
      />
      <div className='footer-content'>
        <span style={{ color: isDarkMode && '#000' }}>CjDev544</span>
        <div className='footer-icons'>
          <a
            href='https://github.com/cjdev544'
            rel='noopener noreferrer nofollow'
            target='_blank'
          >
            {isDarkMode ? (
              <GitHub color='black' size={'3rem'} />
            ) : (
              <GitHub color='white' size={'3rem'} />
            )}
          </a>
          <a
            href='https://www.linkedin.com/in/cjdev544'
            rel='noopener noreferrer nofollow'
            target='_blank'
          >
            {isDarkMode ? (
              <Linkedin color='black' size={'3rem'} />
            ) : (
              <Linkedin color='white' size={'3rem'} />
            )}
          </a>
        </div>
      </div>
    </footer>
  )
}
