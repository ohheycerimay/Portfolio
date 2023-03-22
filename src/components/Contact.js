import React, { useState } from 'react'
import aphoto3 from './aphoto3.jpeg'

function Contact(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Submit form data
    console.log({ firstName, lastName, email, message })
    // Reset form
    setFirstName('')
    setLastName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section class="bg-gray-100 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center pt-20">
    <div class="max-w-lg mx-auto md:mr-4 mb-8 md:mb-0">
      <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Say Hello!
      </h2>
      <p class="mt-4 text-lg text-gray-500">
        Drop a line and I'll get back to you as soon as possible!
      </p>
      <form
        class="mt-9 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-8"
        action="https://formspree.io/f/xayzbrao"
        method="POST">
         <div>
              <label
                for="first_name"
                class="block text-sm font-medium text-gray-700">
                First name
              </label>
              <div class="mt-1">
                <input
                  value={firstName}
                  onChange={handleFirstNameChange}
                  type="text"
                  name="first_name"
                  id="first_name"
                  autocomplete="given-name"
                  class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label
                for="last_name"
                class="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <div class="mt-1">
                <input
                  value={lastName}
                  onChange={handleLastNameChange}
                  type="text"
                  name="last_name"
                  id="last_name"
                  autocomplete="family-name"
                  class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="email"
                class="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div class="mt-1">
                <input
                  value={email}
                  onChange={handleEmailChange}
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div class="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
              </div>
            </div>
            <div class="sm:col-span-2">
              <button
                value={message}
                onChange={handleMessageChange}
                type="submit"
                class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-400 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500">
                Send message
              </button>
            </div>
      </form>
    </div>
    <div class="table-cell text-left sm:w-1/2 ">
      <img
        src={aphoto3}
        alt="Image description"
        class="rounded-lg shadow-md mx-auto md:ml-10 w-3/4 md:w-auto"
      />
      <div class="mt-2 text-center md:text-left md:ml-10 text-sm text-gray-600">
        Photo by Michelle V. Agins/The New York Times
      </div>
    </div>
  </div>
</section>
  )
}

export default Contact
