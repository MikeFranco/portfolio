import React from 'react'

const Education = () => {
  return (
    <div className="flex flex-col text-center pt-10">
      <p className='text-4xl py-8'>
        Education
      </p>
      <div className="flex flex-row flex-wrap mt-5 gap-5">
        <div className='w-full'>
          <div className="text-start border-b-[1px] border-b-stone-500">
            <p className='font-bold text-xl mb-2'>Instituto Politécnico Nacional: UPIICSA - Computer Engineering</p>
            <div className="flex justify-end text-stone-500">
              <p className="text-start">August 2017 - February 2023</p>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className="text-start border-b-[1px] border-b-stone-500">
            <p className='font-bold text-xl mb-2'>Google - Cloud Skills Boost</p>
            <p>Courses and labs created by Google
              to learn about Google Cloud Platform
              and all about their tools. <br />
              <a href=""> See my public profile here</a>
            </p>
            <div className="flex justify-end text-stone-500">
              <p>May 2023 - August 2023</p>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className="text-start border-b-[1px] border-b-stone-500">
            <p className='font-bold text-xl mb-2'>Dev.F - Red Belt</p>
            <p>Creation of databases with Firebase,
              chatbots, use of Git and GitHub,
              Node.Js as a backend to make
              requests to public APIs such as
              PokeApi and Swapi
            </p>
            <div className="flex justify-end text-stone-500">
              <p>May 2018 - June 2018</p>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className="text-start border-b-[1px] border-b-stone-500">
            <p className='font-bold text-xl mb-2'>UNAM - Robotics with Android</p>
            <p>Use of the Arduino Nano device to
              operate a car connected to an app,
              allowing its movement
            </p>
            <div className="flex justify-end text-stone-500">
              <p>April 2018 - May 2018</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education