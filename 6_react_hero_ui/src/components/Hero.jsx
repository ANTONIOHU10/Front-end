import React from 'react'

import {Image} from "@heroui/image";
const Hero = ({
    title = 'Become a react Dev',
    subtitle = 'Find the React job the fits your skill set',
}) => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-800 py-20 mb-4 opacity-100 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('src/assets/images/pc.jpeg')" }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {/** dynamical title using props */}
            {title}
          </h1>
          <p className="my-4 text-xl text-white">
            {/** dynamical subtitle using props */}
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero