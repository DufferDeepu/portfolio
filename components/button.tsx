"use client";

import React from 'react'

const Button = () => {
  return (
        <div className='flex justify-between items-center gap-2'>
          <button
              onClick={() => {
              window.location.href = "mailto:deepeshbind@gmail.com";
              }}
            className="flex justify-center items-center bg-white text-black text-lg font-medium w-full py-3 px-6 rounded-2xl hover:bg-gray-100/90 cursor-pointer">
            Hire me
          </button>

          <button className="flex items-center px-6 py-4 text-sm bg-green-100 text-green-800 rounded-4xl border-none transition-all duration-200">
            <div className="relative mr-2.5">
                <div className="w-1.5 h-1.5 bg-green-900 rounded-full animate-ping absolute"></div>
                <div className="w-1.5 h-1.5 bg-green-800 rounded-full relative"></div>
            </div>
              Available
          </button>
        </div>
  )
}

export default Button; 