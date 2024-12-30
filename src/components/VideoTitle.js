import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-2 sm:px-7 md:px-14 absolute text-white bg-gradient-to-r from-black z-10">
      <h1 className="text-xs sm:text-sm md:text-lg lg:text-2xl font-bold">{title}</h1>
      <p className="py-6 text-xs sm:text-sm md:text-lg lg:text-xl w-full sm:w-3/4 md:w-1/2 lg:w-1/4">{overview}</p>
      <div className="px-0 sm:px-6">
        <button className="mx-1 sm:mx-2 bg-white text-black p-1 sm:p-2 md:p-3 px-3 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base lg:text-lg rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-1 sm:mx-2 bg-white text-black p-1 sm:p-2 md:p-3 px-4 sm:px-7 md:px-9 text-xs sm:text-sm md:text-base lg:text-lg bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle