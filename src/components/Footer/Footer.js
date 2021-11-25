import './Footer.scss'
import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
      <h4 className='footer__heading'>Учебный проект Яндекс.Практикум х BeatFilm.</h4>
      <div className='footer__inner'>
        <span className='footer__copyright'>&copy;2021</span>
        <ul className='footer__socials'>
          <li className='footer__socials-item'>
            <a className='footer__socials-link' href='https://practicum.yandex.com/'>
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__socials-item'>
            <a className='footer__socials-link' href='https://github.com/totfront'>
              Github
            </a>
          </li>
          <li className='footer__socials-item'>
            <a className='footer__socials-link' href='https://www.facebook.com/xelarim/'>
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
