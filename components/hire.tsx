"use client";

import React from 'react'

const Button = () => {
  return (
        <div className='flex flex-row justify-start items-center gap-2 w-full'>
          <button
              onClick={() => {
              window.location.href = "mailto:deepeshbind@gmail.com";
              }}
            className="flex justify-center items-center bg-white text-black text-lg font-medium py-3 px-8 rounded-2xl hover:bg-gray-100/90 cursor-pointer flex-1 sm:flex-initial sm:min-w-[140px]">
            Hire me
          </button>

          <button className="flex items-center justify-center px-6 py-4 text-sm bg-green-100 text-green-800 rounded-2xl border-none transition-all duration-200 flex-shrink-0">
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