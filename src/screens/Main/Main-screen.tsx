import {FC} from "react";

import styles from './Main-screen.module.scss';

import {onAnimationStartMainScreen} from "utils";
import {CheckEvent, Panel, Timer, Title} from "components";

import {ReactComponent as LogoM} from "assets/icons/logo-M.svg";
import {ReactComponent as LogoS} from "assets/icons/logo-S.svg";

import {ReactComponent as LeftSvgL} from 'assets/icons/abstraction_left-L.svg';
import {ReactComponent as RightSvgL} from 'assets/icons/abstraction_right-L.svg';

import {ReactComponent as LeftSvgM} from 'assets/icons/abstraction_left-M.svg';
import {ReactComponent as RightSvgM} from 'assets/icons/abstraction_right-M.svg';

import {ReactComponent as LeftSvgS} from 'assets/icons/abstraction_left-S.svg';
import {ReactComponent as RightSvgS} from 'assets/icons/abstraction_right-S.svg';




interface MainScreenProps {
  windowSize: number;
}

export const MainScreen: FC<MainScreenProps> = ({windowSize}) => {

  let LogoComponent;
  let LeftSvgComponent;
  let RightSvgComponent;

  if (windowSize >= 769) {
    LogoComponent = LogoM;
    LeftSvgComponent = LeftSvgL;
    RightSvgComponent = RightSvgL;
  } else if (windowSize <= 768 && windowSize >= 361) {
    LogoComponent = LogoM;
    LeftSvgComponent = LeftSvgM;
    RightSvgComponent = RightSvgM;
  } else {
    LogoComponent = LogoS;
    LeftSvgComponent = LeftSvgS;
    RightSvgComponent = RightSvgS;
  }


  return (
    <>
      <section
        id="popup-root"
        className={styles.mainScreen}
      >

        <LeftSvgComponent className={styles.LeftSvg}/>
        <RightSvgComponent className={styles.RightSvg}/>

        <div className={styles.wrapper}>

          <a href='https://jkwal.github.io/calendar-of-events/'>
            <LogoComponent
              className={`${styles.logo} ${styles.marginAnimation} no-margin`}
              onAnimationStart={onAnimationStartMainScreen}
            />
          </a>


          <Title
            heading='Under Construction'
            subHeading={`We're making lots of improvements and will be back soon`}
          />

          <Timer windowSize={windowSize}/>

          <CheckEvent/>
        </div>

        <Panel/>
      </section>
    </>
  )
};