import React from 'react'

// assets
import FB from '../assets/icons/fb.svg'
import IG from '../assets/icons/ig.svg'

export const TheTopBar = () => {

  return (
    <header>
      <h1>Nadácia Good boy</h1>
      <div className="socials">
        <img src={FB} alt="Facebook Good boy page" />
        <img src={IG} alt="Instagram Good Boy account" />
      </div>
    </header>
  )
}