import Lora from './photos/Lora.png'
import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'

function LandingPage(props) {
  return (
    <div>
    <Link to="/home">
      <html>
        <head>
          <title></title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/3.0.7/tailwind.min.css"
            integrity="sha512-qKUeQrZrBcZfz82vYJMCSDca/Bk0ylmBwCvOFmW0e8C9M5GonEMtx+5f89q5ue5LeJlNkjqwzrU6c2G6zdd9JQ=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
        </head>
        <body class="bg-black text-white font-sans h-screen flex justify-center items-center">
          <Modal class="bg-white w-1/2 p-4 rounded-lg flex-1">
            <h2>Ceri</h2>
            <p>Modal content goes here.</p>
          </Modal>
        </body>
      </html>
    </Link>
  </div>
  )
}

export default LandingPage
