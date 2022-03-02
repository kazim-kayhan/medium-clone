import React from 'react'

const HeroSection = () => {
  return (
    <div className=" flex items-center justify-between border-y-black bg-yellow-400 p-10">
      <div className="space-y-5 px-10">
        <h1 className="max-w-xl font-serif text-6xl">
          <span className="font-extrabold text-green-600 underline decoration-black decoration-4">
            Medium
          </span>
          is a place to write read and connect
        </h1>
        <h2>
          It's free and easy to post your thinking on any topic and connect with
          millions of readers.
        </h2>
      </div>
      <img
        src="/medium-logo.svg"
        alt="Medium"
        className="lg:56 xl:64 hidden md:inline-flex md:w-48"
      />
    </div>
  )
}

export default HeroSection
