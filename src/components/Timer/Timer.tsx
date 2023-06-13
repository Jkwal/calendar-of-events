import {FC, useEffect, useState} from "react";

import styles from './Timer.module.scss';

import {DialElement} from "components";
import {calculateTime, onAnimationStart} from "utils";
import {ReactComponent as SeparatorM} from "assets/icons/separator-M.svg";
import {ReactComponent as SeparatorS} from "assets/icons/separator-S.svg";


interface TimerProps {
  windowSize: number;
}


export const Timer: FC<TimerProps> = ({windowSize}) => {
  const [days, setDays] = useState(calculateTime('Days'));
  const [hours, setHours] = useState(calculateTime('Hours'));
  const [minutes, setMinutes] = useState(calculateTime('Minutes'));
  const [seconds, setSeconds] = useState(calculateTime('Seconds'));


  useEffect(() => {
    const interval = setInterval(() => {
      setDays(calculateTime('Days'));
      setHours(calculateTime('Hours'));
      setMinutes(calculateTime('Minutes'));
      setSeconds(calculateTime('Seconds'));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const SeparatorComponent = windowSize >= 769 ? SeparatorM : SeparatorS;

  return (
    <div
      className={`${styles.timer} ${styles.marginAnimation} no-margin`}
      onAnimationStart={onAnimationStart}
    >
      <DialElement
        time={days}
        unit={'Days'}
        windowSize={windowSize}
      />

      <SeparatorComponent className={styles.separator}/>

      <DialElement
        time={hours}
        unit={'Hours'}
        windowSize={windowSize}
      />

      <SeparatorComponent className={styles.separator}/>

      <DialElement
        time={minutes}
        unit={'Minutes'}
        windowSize={windowSize}
      />

      <SeparatorComponent className={styles.separator}/>

      <DialElement
        time={seconds}
        unit={'Seconds'}
        windowSize={windowSize}
      />
    </div>
  );
};