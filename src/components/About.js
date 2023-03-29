import React from 'react'
import CeriMay from './photos/CeriMay.png'

function About(props) {
  return (
    <section class="bg-gray-100 py-8 ">
  <div class="container mx-auto px-4 md:px-0 pt-20">
    <h2 class="text-3xl font-bold mb-4">About Me</h2>
    <div class="flex flex-wrap -mx-2">
      <div class="w-full md:w-1/2 px-2">
        <img src={CeriMay} alt="Ceri May" class="rounded-lg shadow-md" />
      </div>
      <div class="w-full md:w-1/2 px-2">
        <p class="text-gray-700 text-xl mb-4">
          Hi there, my name is Ceri May, and I’m a software engineer. Originally from the west coast, I’ve lived all over the country and currently reside in Cleveland, Ohio. I spent over a decade as a bartender, honing my leadership, problem-solving, and teamwork skills before the pandemic hit. Looking for a new challenge, I recently transitioned into software engineering, focusing primarily on front-end development with React. I’m also well-versed in Ruby, Ruby on Rails, Javascript, CSS, and HTML (and currently digging into Typescript, Python, and MongoDB as well). I love the creativity and problem-solving that goes into coding, and I’m constantly pushing myself to learn new skills and technologies.
        </p>
        <p class="text-gray-700 text-xl mb-4">
          As a software engineer, I’m passionate about creating intuitive and engaging user experiences that make a difference in people’s lives. I have a keen eye for design and enjoy collaborating with others to bring their visions to life. One of my biggest motivations is connecting people from all over the world through social media platforms. I believe that technology has the power to bring us closer together and make the world a better place, and I’m excited to be a part of that mission.
        </p>
        <p class="text-gray-700 text-xl mb-4">
          In addition to my technical skills, I’m known for my ability to lead and inspire teams. I thrive in collaborative environments and consistently seek ways to support and encourage my colleagues. Whether I’m mixing drinks or writing code, my goal is always to make a positive impact on the people around me. When I’m not coding, you can find me trying out new recipes, immersed in a book, or exploring different cities with my pup, Jack. Thanks for stopping by my little spot on the web, and reach out if you’d like to learn more or collaborate on a project!
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default About
