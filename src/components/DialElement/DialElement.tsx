import {FC} from "react";

import styles from './DialElement.module.scss';

import {ReactComponent as TimerElementM} from "assets/icons/timer_element-M.svg";
import {ReactComponent as TimerElementS} from "assets/icons/timer_element-S.svg";


interface DialElementProps {
  time: number;
  unit: string;
  windowSize: number;
}

const unitMap: Record<string, string> = {
  Days: "DD",
  Hours: "HH",
  Minutes: "MM",
  Seconds: "SS"
};

export const DialElement: FC<DialElementProps> = ({
                                                    unit,
                                                    time,
                                                    windowSize
                                                  }) => {

  const TimerElement =
    windowSize >= 769 ? TimerElementM : TimerElementS;

  const MappedUnit =
    windowSize >= 769 ? unit : unitMap[unit];

  return (
    <div className={styles.dialElement}>
      <p className={styles.time}>{time}</p>

      <div className={styles.timerWrapper}>
        <TimerElement className={styles.timerElement}/>
        <p className={styles.unit}>{MappedUnit}</p>
      </div>
    </div>
  )
}