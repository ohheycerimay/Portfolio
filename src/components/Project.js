import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

function Project({ project }) {
  return (
    <div>
      
    <div>
    <div class="flex flex-wrap: nowrap justify-center items-row">
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-4 w-1/3">
      {project && project.images ? (
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
        >
          {project.images.map((image, id) => (
            <div key={id}>
              <img src={image} alt='Website Images' />
            </div>
          ))}
        </Carousel>
      ) : (
        <p>Loading...</p>
      )}
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{project.name}</div>
          <p class="text-gray-700 text-base">{project.description}</p>
          <div class="py-4 flex">
            <div class="mr-4">
              <p class="text-sm font-medium text-gray-700 mb-2"></p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-900 hover:bg-gray-400 duration-300">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-700 mb-2"></p>
              <a
                href={project.loom}
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
              {project.tech}
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Project
