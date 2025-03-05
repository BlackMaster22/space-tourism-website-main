import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import homemobile from '../assets/home/background-home-mobile.jpg'
import hometablet from '../assets/home/background-home-tablet.jpg'
import homedesktop from '../assets/home/background-home-desktop.jpg'
import destinationmobile from '../assets/destination/background-destination-mobile.jpg'
import destinationtablet from '../assets/destination/background-destination-tablet.jpg'
import destinationdesktop from '../assets/destination/background-destination-desktop.jpg'
import crewmobile from '../assets/crew/background-crew-mobile.jpg'
import crewtablet from '../assets/crew/background-crew-tablet.jpg'
import crewdesktop from '../assets/crew/background-crew-desktop.jpg'
import technologymobile from '../assets/technology/background-technology-mobile.jpg'
import technologytablet from '../assets/technology/background-technology-tablet.jpg'
import technologydesktop from '../assets/technology/background-technology-desktop.jpg'
import { useScreenWidth } from './useScreenWidth';

export const useDynamicBackground = () => {
  const [background, setBackground] = useState('');
  const location = useLocation()
  const screenWidth = useScreenWidth()

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        if (screenWidth < 400) {
          setBackground(homemobile);
        } else if (screenWidth < 1024) {
          setBackground(hometablet);
        } else {
          setBackground(homedesktop);
        }
        break;
      case '/destination':
        if (screenWidth < 400) {
          setBackground(destinationmobile);
        } else if (screenWidth < 1024) {
          setBackground(destinationtablet);
        } else {
          setBackground(destinationdesktop);
        }
        break;
      case '/crew':
        if (screenWidth < 400) {
          setBackground(crewmobile);
        } else if (screenWidth < 1024) {
          setBackground(crewtablet);
        } else {
          setBackground(crewdesktop);
        }
        break;
      case '/technology':
        if (screenWidth < 400) {
          setBackground(technologymobile);
        } else if (screenWidth < 1024) {
          setBackground(technologytablet);
        } else {
          setBackground(technologydesktop);
        }
        break;
      default:
        setBackground('');
    }
  }, [location.pathname, screenWidth]);

  return background;
}

