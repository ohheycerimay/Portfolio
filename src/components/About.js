import React from 'react'
import CeriMay from './CeriMay.png'

function About(props) {
  return (
    <section class="bg-gray-100 py-8">
      <div class="container mx-auto px-2 md:px-0">
        <h2 class="text-3xl font-bold mb-4">About Me</h2>
        <div class="flex flex-wrap -mx-2">
          <div class="w-full md:w-1/2 px-2">
            <img src={CeriMay} alt="Ceri May" class="rounded-lg shadow-md" />
          </div>
          <div class="w-full md:w-1/2 px-2">
            <p class="text-gray-700 mb-4">
              Hi there, my name is Ceri May, and I’m a software engineer.
              Originally from the west coast, I’ve lived all over the country
              and currently reside in Cleveland, Ohio. I spent over a decade as
              a bartender, honing my leadership, problem-solving, and teamwork
              skills before the pandemic hit. Looking for a new challenge, I
              recently transitioned into software engineering, focusing
              primarily on front-end development with React. I’m also
              well-versed in Ruby, Ruby on Rails, Javascript, CSS, and HTML (and
              currently digging into Typescript, Python, and MongoDB as well). I
              love the creativity and problem-solving that goes into coding, and
              I’m constantly pushing myself to learn new skills and
              technologies.{' '}
            </p>
            <p class="text-gray-700 mb-4">
              As a software engineer, I’m passionate about creating intuitive
              and engaging user experiences that make a difference in people’s
              lives. I have a keen eye for design and enjoy collaborating with
              others to bring their visions to life. One of my biggest
              motivations is connecting people from all over the world through
              social media platforms. I believe that technology has the power to
              bring us closer together and make the world a better place, and
              I’m excited to be a part of that mission.
            </p>
            <p class="text-gray-700 mb-4">
              In addition to my technical skills, I’m known for my ability to
              lead and inspire teams. I thrive in collaborative environments and
              consistently seek ways to support and encourage my colleagues.
              Whether I’m mixing drinks or writing code, my goal is always to
              make a positive impact on the people around me. When I’m not
              coding, you can find me trying out new recipes, immersed in a
              book, or exploring different cities with my pup, Jack. Thanks for
              stopping by my little spot on the web, and reach out if you’d like
              to learn more or collaborate on a project!
            </p>

            {/* <a
              href="#"
              class="bg-rose-400 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              back to top
            </a> */}
          </div>
        </div>
      </div>
      <br></br>
      {/* <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'black' }}>Skills</h1>
        <br></br>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
          }}>
          <div>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>&#10148; React.js</li>
              <li>&#10148; Object-Oriented Programming</li>
              <li>&#10148; Ruby on Rails</li>
              <li>&#10148; ActiveRecord</li>
              <li>&#10148; Full-Stack Development</li>
              <li>&#10148; Business Development</li>
              <li>&#10148; Javascript</li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>&#10148; Responsive Web Design</li>
              <li>&#10148; REST APIs</li>
              <li>&#10148; Wireframing</li>
              <li>&#10148; Critical Thinking</li>
              <li>&#10148; Debugging</li>
              <li>&#10148; Management</li>
              <li>&#10148; Leadership</li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>&#10148; Tailwind CSS</li>
              <li>&#10148; Node.js</li>
              <li>&#10148; Ruby</li>
              <li>&#10148; HTML, CSS</li>
              <li>&#10148; Marketing</li>
              <li>&#10148; Problem Solving</li>
              <li>&#10148; Sales</li>
            </ul>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default About
