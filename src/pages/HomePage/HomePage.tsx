import {FC, useEffect, useState} from "react";

import {EventsScreen, MainScreen} from "screens";


export const HomePage: FC = () => {

  const [windowSize, setWindowSize] = useState(
    window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main>
      <MainScreen windowSize={windowSize}/>
      <EventsScreen windowSize={windowSize}/>
    </main>
  )
}