import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between p-5 font-bold">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            src="/medium.svg"
            alt="Medium"
            className="w-16 cursor-pointer object-contain "
          />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3 className="">About</h3>
          <h3 className="">Contact</h3>
          <h3 className="cursor-pointer rounded-full bg-green-600 px-4 py-1 text-white">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3 className="cursor-pointer">Sign In</h3>
        <h3 className="cursor-pointer rounded-full border border-green-600 px-4 py-1">
          Get Started
        </h3>
      </div>
    </header>
  )
}

export default Header
