
import './App.css'

import React from 'react'
import images from './images/site-icon.png'
import position from './images/position-img.png'
import buttonimage from './images/audio-icon.png'
import position2 from './images/position-icon-5.png'
import position3 from './images/position-icon-5.png'
import icons from './images/network-logos.png'
import copy from './items/copier-logo.png'
import pen from './items/pecil-icon.png'
import lighter from './items/lighter-icon.png'


function App() {
  return (
    <div className="container">
      <header className='header'>
      <div className="header-icon">
        <img src={images} alt="" />
      </div>
      <div className="selects">
        <select>
          <option value="Product">Product</option>   
        </select>
        <select>
            <option value="Template">Template</option>
          </select>
          <a href="">Blog</a>
          <a href="">Pricing</a>
      </div>
      <div className="buttons">
        <button className='first-btn'>Sign up</button>
        <button className='second-btn'>Get Started</button>
      </div>
    </header>
    <img className='position-1' src={position} alt="" />
    <div className="main">
      <div className="main-items">
<h1>Managing business payments has never been easier</h1>
<p className='main-p'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything.</p>
<div className="main-btns">
  <button className='mainbtn-1'>Our Progress</button>
  <button className='mainbtn-2'><img src={buttonimage} /></button>
  <h2 className='audio-btn'>See how it Works</h2>
</div>
      </div>
      <form>
        <h2 className='register-h2'>Get started for free</h2>
        <input type="email" placeholder='Enter email'/>
        <input type="password" placeholder='Enter password'/>
        <button className='register-btn'>Get started</button>
      </form>
    </div>
<img className='position-2' src={position2}  />
<img className='position-3' src={position3}  />
<div className="section">
  <div className="infos-1">
<h2 className='section-inf'>Trusted By Over 100+ Startups and freelance business</h2>
<img className='networking' src={icons}  />
  </div>
  <div className="infos-2">
<h2 className='section-inf-2' >Believing neglected so so allowance</h2>
<h3 className='section-inf-3'>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.</h3>
<button className='section-btn' >We so opinion friends me message as delight.</button>
  </div>
  <div className="cards">
    <div className="card-1">
      <img src={lighter} />
      <h2>Led Ask Possible Mistress</h2>
      <h3>Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</h3>
    </div>
    <div className="card-2">
    <img src={pen} alt="" />
      <h2>Elegance Eat Likewise</h2>
      <h3>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode. </h3>
    </div>
    <div className="card-3">
    <img src={copy} />
      <h2>Message Oram Nothing</h2>
      <h3>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</h3>
    </div>
  </div>
  <div className="final">
    <h2>Track your crytpo portfolio on the best way possible</h2>
    <button>Check It Out</button>
  </div>
</div>
    </div>  
  )
}

export default App
