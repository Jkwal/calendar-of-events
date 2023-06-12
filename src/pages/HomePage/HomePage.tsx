import {FC, useEffect, useState} from "react";

import styles from './HomePage.module.scss';

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
    <main
      className={styles.homePage}>
      <MainScreen windowSize={windowSize}/>
      <EventsScreen windowSize={windowSize}/>
    </main>
  )
}