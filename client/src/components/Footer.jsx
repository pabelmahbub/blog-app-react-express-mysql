import React from 'react';
import images from '../img/images.jpeg'

function Footer() {
  return (
    <footer>
      <img src = {images} alt=""/>
      <span>Made with ❤️ and  <b>React.js</b></span>
    </footer>
  )
}

export default Footer