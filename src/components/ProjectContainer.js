import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // Import carousel styles

let chefImages = [
  'https://i.imgur.com/yKeZkmI.png',
  'https://i.imgur.com/CE3trUi.png',
  'https://i.imgur.com/HIYk4jw.png',
  'https://i.imgur.com/IvgDOHv.png',
]

let wanderImages = [
  "https://i.imgur.com/vNMUvW9.png",
  "https://i.imgur.com/pcQ9cxe.png",
  "https://i.imgur.com/9ZSpO2V.png",
  "https://i.imgur.com/HeIS7st.png"
]

let gotImages = [
  "https://i.imgur.com/iG8UJtw.png",
  "https://i.imgur.com/VdAgqK5.png",
  "https://i.imgur.com/W4t1EWu.png",
  "https://i.imgur.com/cLc2u8s.png"
]

function ProjectContainer() {
  return (
    <div class="flex flex-row flex-wrap justify-center">
      <div class="flex flex-row flex-wrap justify-center">
        <div class="max-w-fit rounded overflow-hidden shadow-lg w-full max-w-xl m-10">
          <div class="relative">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              style={{ maxHeight: 'calc(100vh - 20rem)' }} // Subtract the height of your navbar from 100vh
            >
              {chefImages.map((image, id) => (
                <div key={id}>
                  <img
                    src={image}
                    alt="Website Images"
                    style={{ maxHeight: 'calc(100vh - 4rem)' }}
                  />
                </div>
              ))}
            </Carousel>
            <div class="absolute top-0 left-0 right-0 h-20"></div>{' '}
            {/* Replace h-16 with the height of your navbar */}
          </div>

          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Yes Chef!</div>
            <p class="text-gray-700 text-base">
              Yes Chef! is a restaurant inventory app developed using React and
              Ruby on Rails.
            </p>
            <div class="py-4 flex">
              <div class="mr-4">
                <p class="text-sm font-medium text-gray-700 mb-2"></p>
                <a
                  href="https://github.com/ohheycerimay/phase-5-yes-chef"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-900 hover:bg-gray-400 duration-300">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-700 mb-2"></p>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-900 hover:bg-gray-400 duration-300">
                  <FontAwesomeIcon icon={faVideo} />
                </a>
              </div>
            </div>
            <div class="py-4">
              <p class="text-sm font-medium text-gray-700 mb-2">Tech Used:</p>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React, Ruby on Rails
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center items-col ">
        <div class="max-w-fit rounded overflow-hidden shadow-lg w-full max-w-xl m-10">
          <div class="relative">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              style={{ maxHeight: 'calc(100vh - 20rem)' }} // Subtract the height of your navbar from 100vh
            >
              {wanderImages.map((image, id) => (
                <div key={id}>
                  <img
                    src={image}
                    alt="Website Images"
                    style={{ maxHeight: 'calc(100vh - 4rem)' }}
                  />
                </div>
              ))}
            </Carousel>
            <div class="absolute top-0 left-0 right-0 h-20"></div>{' '}
            {/* Replace h-16 with the height of your navbar */}
          </div>

          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Wander</div>
            <p class="text-gray-700 text-base">
            Wander is a niche travel blog that showcases unique experiences.
            </p>
            <div class="py-4 flex">
              <div class="mr-4">
                <p class="text-sm font-medium text-gray-700 mb-2"></p>
                <a
                  href="https://github.com/paigetetz/Wander"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-900 hover:bg-gray-400 duration-300">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-700 mb-2"></p>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-900 hover:bg-gray-400 duration-300">
                  <FontAwesomeIcon icon={faVideo} />
                </a>
              </div>
            </div>
            <div class="py-4">
              <p class="text-sm font-medium text-gray-700 mb-2">Tech Used:</p>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React, Ruby on Rails
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center items-col ">
        <div class="max-w-fit rounded overflow-hidden shadow-lg w-full max-w-xl m-10">
          <div class="relative">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              style={{ maxHeight: 'calc(100vh - 20rem)' }} // Subtract the height of your navbar from 100vh
            >
              {gotImages.map((image, id) => (
                <div key={id}>
                  <img
                    src={image}
                    alt="Website Images"
                    style={{ maxHeight: 'calc(100vh - 4rem)' }}
                  />
                </div>
              ))}
            </Carousel>
            <div class="absolute top-0 left-0 right-0 h-20"></div>{' '}
            {/* Replace h-16 with the height of your navbar */}
          </div>

          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">GoT or Not</div>
            <p class="text-gray-700 text-base">
            A Game of Thrones meets Grand Theft Auto with a dash of satire dating site.
            </p>
            <div class="py-4 flex">
              <div class="mr-4">
                <p class="text-sm font-medium text-gray-700 mb-2"></p>
                <a
                  href="https://github.com/ohheycerimay/phase-2-NoTGoT"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-900 hover:bg-gray-400 duration-300">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-700 mb-2"></p>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-900 hover:bg-gray-400 duration-300">
                  <FontAwesomeIcon icon={faVideo} />
                </a>
              </div>
            </div>
            <div class="py-4">
              <p class="text-sm font-medium text-gray-700 mb-2">Tech Used:</p>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer
