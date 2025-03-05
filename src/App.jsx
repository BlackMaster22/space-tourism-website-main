import React, { useEffect, useState } from 'react'
import logo from './assets/shared/logo.svg'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { Home } from './components/Home';
import { Destinations } from './components/Destinations';
import { Crew } from './components/Crew';
import { Technology } from './components/Technology';
import { useScreenWidth } from './hooks/useScreenWidth';
import { useDynamicBackground } from './hooks/useDynamicBackground';

export const App = () => {
  const background = useDynamicBackground()
  const [border, setBorder] = useState('00')
  const location = useLocation()
  const width = useScreenWidth()

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/':
        setBorder('00');
        break;
      case '/destination':
        setBorder('01');
        break;
      case '/crew':
        setBorder('02');
        break;
      case '/technology':
        setBorder('03');
        break;
      default:
        setBorder('00'); 
    }
  }, [location.pathname])

  const navegacion = [
    { number: '00', component: 'HOME', path: '/' },
    { number: '01', component: 'DESTINATION', path: '/destination' },
    { number: '02', component: 'CREW', path: '/crew' },
    { number: '03', component: 'TECHNOLOGY', path: '/technology' },
  ]
  return (
    <>
      <div className="h-screen overflow-scroll"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} >
        <div className='h-full w-screen font-[Bellefair]'>
          <header className="flex items-center py-10">
            <div className="flex items-center justify-between  w-full">
              <img src={logo} alt="Space Tourism Logo" className={`${width < 375 ? 'h-6 w-6 ml-2' : width < 705 ? 'h-7 w-7 ml-10' : width < 1500 ? 'h-8 w-8 ml-16' : 'h-12 w-12 ml-24'}`}/>
              
              <nav className={`bg-white/10  ${width < 375 ? 'ml-4 pl-8' : width < 705 ? 'ml-4 pl-12' : width < 1500 ? 'ml-4 pl-16' : 'pl-20'}`}>
                <ul className="flex flex-wrap justify-around text-white">
                  {width < 375 ? (
                    navegacion.map(nave => (
                    <div
                      key={nave.number}
                        className={`px-2 py-[5px] flex items-center ${border === nave.number ? 'text-white border-b-2' : 'text-gray-400'}`}
                    >
                      <li>
                        <Link to={nave.path} className="text-[10px] hover:text-white uppercase">
                          <span>{nave.component}</span>
                        </Link>
                      </li>
                    </div>
                    ))) :
                    width < 705 ? (navegacion.map(nave => (
                      <div
                        key={nave.number}
                        className={`px-2 py-[5px] flex items-center ${border === nave.number ? 'text-white border-b-2' : 'text-gray-400'}`}
                      >
                        <li>
                          <Link to={nave.path} className="text-[12px] hover:text-white uppercase">
                             <span>{nave.component}</span>
                          </Link>
                        </li>
                      </div>
                    ))) :
                      width < 1500 ? (navegacion.map(nave => (
                        <div
                          key={nave.number}
                          className={`p-4 flex items-center space-x-4 ${border === nave.number ? 'text-white border-b-2' : 'text-gray-400'}`}
                        >
                          <li>
                            <Link to={nave.path} className="text-xl hover:text-white uppercase">
                              <span className="font-bold mr-1">{nave.number}</span> <span>{nave.component}</span>
                            </Link>
                          </li>
                        </div>
                      ))) : (navegacion.map(nave => (
                        <div
                          key={nave.number}
                          className={`p-4 flex items-center space-x-4 ${border === nave.number ? 'text-white border-b-2' : 'text-gray-400'}`}
                        >
                          <li>
                            <Link to={nave.path} className="text-4xl hover:text-white uppercase">
                              <span className="font-bold mr-1">{nave.number}</span> <span>{nave.component}</span>
                            </Link>
                          </li>
                        </div>
                      ))) }
                </ul>
              </nav>
            </div>
          </header>
          <div className='h-auto'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destination" element={<Destinations />} />
              <Route path="/crew" element={<Crew />} />
              <Route path="/technology" element={<Technology />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}
