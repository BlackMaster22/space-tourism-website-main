import React, { useState } from 'react'
import { useDestinations } from '../hooks/useData'
import { useScreenWidth } from '../hooks/useScreenWidth'

export const Destinations = () => {
  const destinos = useDestinations()
  const [activeDestination, setActiveDestination] = useState(null)
  const width = useScreenWidth()

  const handleDestinationClick = (destination) => {
    if (activeDestination === destination.name) {
      setActiveDestination(null);
    } else {
      setActiveDestination(destination.name);
    }
  };

  return (
    <div className="w-full h-full text-white font-mono">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold uppercase mb-8">Destinations</h1>
        <div className="flex justify-around flex-wrap w-full h-full">
          {destinos.map(destino => (
            <div
              key={destino.name}
              className={`transition duration-700 ${activeDestination && activeDestination !== destino.name ? 'hidden' : 'opacity-100'}`}
            >
              <div className='flex flex-row justify-center flex-wrap'>
                <div>
                  <div className='w-full text-center font-semibold text-2xl'>
                    {destino.name}
                  </div>
                  <img
                    src={destino.images.png}
                    alt={destino.name}
                    className={`size-44 object-cover m-8 cursor-pointer transition duration-500 ${activeDestination && activeDestination === destino.name ? 'w-64 h-64' : ''}`}
                    onClick={() => handleDestinationClick(destino)}
                  />
                </div>
                <div className={`transition duration-700 p-6 font-bold text-xl ${activeDestination && activeDestination === destino.name ? 'inline' : 'hidden'} ${activeDestination && activeDestination === destino.name && width < 705 ? 'w-full' : 'w-1/2'}`}>
                  <span className='font-extrabold text-2xl'>Description: </span>{destino.description}
                  <br />
                  <br />
                  <span className='font-extrabold text-2xl'>Distance: </span>{destino.distance}
                  <br />
                  <br />
                  <span className='font-extrabold text-2xl'>Travel: </span>{destino.travel}
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
