import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useScreenWidth } from '../hooks/useScreenWidth'

export const Home = () => {
  const screenWidth = useScreenWidth()
  const navigate = useNavigate()
  const handleExploreClick = () => {
    navigate('/destination');
  }
  return (
    <div className={`w-full h-full text-white flex items-center font-mono ${screenWidth < 768 ? 'flex-col justify-center' : 'justify-around'}`}>
      <div className={` ${screenWidth < 768 ? 'py-8 w-3/4 ' : 'py-28 w-sm'}`}>
        <h3 className='p-2 text-md'>So, you want to travel to</h3>
        <h1 className={`font-serif p-2 ${screenWidth < 768 ? 'text-6xl' : 'text-8xl '}`}>SPACE</h1>
        <h6 className='text-[10px] text-justify p-2'>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </h6>
      </div>
      <button onClick={handleExploreClick} className='size-40 bg-white text-black text-2xl rounded-full shadow-lg shadow-gray-300 cursor-pointer hover:bg-gray-200'>
        EXPLORE
      </button>
    </div>
  )
}
