import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
  return (
    <div class="bg-black px-4 py-12 mx-auto pace-y-8 overflow-hidden sm:px-6 lg:px-8 text-offwhite">
  <nav class="flex flex-wrap justify-center -mx-5 -my-2">
    <div class="px-5 py-2">
      <a href="https://www.linkedin.com/in/ohheycerimay/" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
    <div class="px-5 py-2">
      <a href="https://github.com/ohheycerimay" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  </nav>
</div>
  )
}

export default Footer
