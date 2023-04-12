import Lora from './photos/Lora.png'
import React from 'react'
import { Link } from 'react-router-dom'


function LandingPage(props) {
  return (
    <div>
      <Link to="/home">
        <div class='bg-black flex items-center justify-center' style={{height: '100vh'}}>
          <img src={Lora} />
        </div>
      </Link>
    </div>
  );
}

export default LandingPage
