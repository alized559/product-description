import React, { useEffect, useState } from 'react';
import TopNavbar from './desktop_navbar/top_navbar';
import BottomNavbar from './desktop_navbar/bottom_navbar';
import MobileNavbar from './mobile_navbar';

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => { 
      window.removeEventListener("resize", handleResize)
    }
  }, [setScreenWidth]);

  return (
    <div>
      {
        screenWidth > 1110
        ? <div>
            <TopNavbar />
            <BottomNavbar />
          </div>
        : <MobileNavbar />
      }
      
    </div>
  );
};

export default Navbar;
