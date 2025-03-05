import React, { useState } from 'react'
import { useCrew } from '../hooks/useData'
import { useScreenWidth } from '../hooks/useScreenWidth';

export const Crew = () => {
  const crews = useCrew()
  const [activeCrew, setactiveCrew] = useState(null)
  const width = useScreenWidth()

  const handleDestinationClick = (crew) => {
    if (activeCrew === crew.name) {
      setactiveCrew(null);
    } else {
      setactiveCrew(crew.name);
    }
  };
  return (
    <div className="w-full h-full text-white font-mono">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold uppercase mb-8">Crews</h1>
        <div className="flex justify-around flex-wrap w-full h-full">
          {crews.map(crew => (
            <div
              key={crew.name}
              className={`transition duration-700 ${activeCrew && activeCrew !== crew.name ? 'hidden' : 'opacity-100'}`}
            >
              <div className='flex flex-row justify-center flex-wrap'>
                <div className=''>
                  
                  <img
                    src={crew.images.png}
                    alt={crew.name}
                    className={`w-32 h-56 object-contain aspect-[10/16] mx-12 cursor-pointer transition duration-500 ${activeCrew && activeCrew === crew.name ? 'w-64 h-84 my-4' : 'my-8'}`}
                    onClick={() => handleDestinationClick(crew)}
                  />
                  <div className={`w-full text-center font-semibold text-2xl ${activeCrew && activeCrew === crew.name ? 'hidden' : 'opacity-100'}`}>
                    {crew.name}
                  </div>
                </div>
                <div className={`transition duration-700 px-6 w-1/2 font-bold text-xl ${activeCrew && activeCrew === crew.name ? 'inline' : 'hidden'} ${activeCrew && activeCrew === crew.name && width < 705 ? 'w-full' : 'w-1/2'}`}>
                  <div className='w-full text-center font-semibold text-2xl'>
                    {crew.name}
                  </div>
                  <br />
                  <br />
                  <span className='font-extrabold text-2xl'>Role: </span>{crew.role}
                  <br />
                  <br />
                  <span className='font-extrabold text-2xl'>Bio: </span>{crew.bio}
                  <br />
                  <br />


                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
