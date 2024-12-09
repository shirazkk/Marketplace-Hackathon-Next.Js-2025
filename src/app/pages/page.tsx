import React from 'react'
import { FaBook, FaBookReader } from 'react-icons/fa'

const Pages = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-2xl">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <FaBook className="text-6xl text-green-600" />
          <FaBookReader className="text-6xl text-blue-600" />
        </div>
        <div className="text-4xl font-bold text-gray-800 mb-4">
          Our Pages Will Be Coming Soon!
        </div>
        <p className="text-gray-600 text-lg">
          We&apos;re preparing some amazing content for you
        </p>
      </div>
    </div>
  )
}

export default Pages
