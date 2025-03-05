import React, { useState } from 'react'
import { useTechnology } from '../hooks/useData'
import { useScreenWidth } from '../hooks/useScreenWidth'

export const Technology = () => {
  const techs = useTechnology()
  const [activeTech, setactiveTech] = useState(null)
  const width = useScreenWidth()

  const handleDestinationClick = (tech) => {
    if (activeTech === tech.name) {
      setactiveTech(null);
    } else {
      setactiveTech(tech.name);
    }
  };
  return (
    <div className="w-full h-full text-white font-mono">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold uppercase mb-8">Technologys</h1>
        <div className="flex justify-around flex-wrap w-full h-full">
          {techs.map(tech => (
            <div
              key={tech.name}
              className={`transition duration-700 ${activeTech && activeTech !== tech.name ? 'hidden' : 'opacity-100'}`}
            >
              <div className='flex flex-row justify-center flex-wrap'>
                <div className=''>

                  <img
                    src={tech.images.portrait}
                    alt={tech.name}
                    className={`w-32 h-56 object-contain mx-12 cursor-pointer transition duration-500 ${activeTech && activeTech === tech.name ? 'w-64 h-84 my-4' : 'my-8'}`}
                    onClick={() => handleDestinationClick(tech)}
                  />
                  <div className={`w-full text-center font-semibold text-2xl ${activeTech && activeTech === tech.name ? 'hidden' : 'opacity-100'}`}>
                    {tech.name}
                  </div>
                </div>
                <div className={`transition duration-700 px-6 font-bold text-xl ${activeTech && activeTech === tech.name ? 'inline' : 'hidden'} ${activeTech && activeTech === tech.name && width < 705 ? 'w-full ' : 'w-1/2'}`}>
                  <div className='w-full text-center font-semibold text-2xl'>
                    {tech.name}
                  </div>
                  <br />
                  <br />
                  <span className='font-extrabold text-2xl'>Description: </span>{tech.description}
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

