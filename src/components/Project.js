import React from 'react'

function Project({ project }) {
  return (
    <section class="py-12 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-4">My Work</h2>
        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
          <a
            href="#"
            class="flex flex-col bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://via.placeholder.com/640x360.png"
              alt=""
              class="w-full h-48 object-cover"
            />
            <div class="p-4 flex-grow">
              <h3 class="text-xl font-bold mb-2">{project.name}</h3>
              <p class="text-gray-700">Short project description.</p>
            </div>
          </a>
          <a
            href="#"
            class="flex flex-col bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://via.placeholder.com/640x360.png"
              alt=""
              class="w-full h-48 object-cover"
            />
            <div class="p-4 flex-grow">
              <h3 class="text-xl font-bold mb-2">{project.name}</h3>
              <p class="text-gray-700">Short project description.</p>
            </div>
          </a>
          <a
            href="#"
            class="flex flex-col bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://via.placeholder.com/640x360.png"
              alt=""
              class="w-full h-48 object-cover"
            />
            <div class="p-4 flex-grow">
              <h3 class="text-xl font-bold mb-2">{project.name}</h3>
              <p class="text-gray-700">Short project description.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Project
