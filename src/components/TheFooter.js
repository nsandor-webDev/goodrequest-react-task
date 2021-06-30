import React from 'react'

// assets
import Logo from '../assets/img/logo.svg'

export const TheFooter = () => {

  return (
    <footer>
      <div className="logo">
        <img src={Logo} alt="Logo Good Boy" />
      </div>
      <nav>
        <h2>Nadácia Good Boy</h2>
        <ul>
          <li>O projekte</li>
          <li>Ako na to</li>
          <li>Kontakt</li>
        </ul>
      </nav>
      <div className="about-us">
        <h2>Nadácia Good Boy</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque velit dicta pariatur labore alias commodi expedita aperiam.</p>
      </div>
      <div className="useful-info">
        <h2>Dôležité informácie</h2>
        <p>Integer et orci faucibus, iaculis arcu a, porttitor massa. Etiam sit amet augue aliquam, laoreet arcu eget, gravida augue. Nullam sed.</p>
      </div>
    </footer>
  )
}