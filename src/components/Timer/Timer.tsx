import {FC, useEffect, useState} from "react";

import styles from './Timer.module.scss';

import {DialElement} from "components";
import {ReactComponent as SeparatorM} from "assets/icons/separator-M.svg";
import {ReactComponent as SeparatorS} from "assets/icons/separator-S.svg";


interface TimerProps {
    windowSize: number;
}


export const Timer: FC<TimerProps> = ({windowSize}) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const targetDate = new Date();
            const countdownDate = new Date('2023-07-24');
            const difference = countdownDate.getTime() - targetDate.getTime();

            const calculatedDays = Math.floor(difference / (1000 * 60 * 60 * 24));
            const calculatedHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const calculatedMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const calculatedSeconds = Math.floor((difference % (1000 * 60)) / 1000);

            setDays(calculatedDays);
            setHours(calculatedHours);
            setMinutes(calculatedMinutes);
            setSeconds(calculatedSeconds);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    let SeparatorComponent;

    if (windowSize >= 769) {
        SeparatorComponent = SeparatorM;
    } else {
        SeparatorComponent = SeparatorS;
    }

    return (
        <div className={styles.timer}>
            <DialElement
                time={days}
                unit={'Days'}
                windowSize={windowSize}
            />

            <SeparatorComponent className={styles.sepatator}/>

            <DialElement
                time={hours}
                unit={'Hours'}
                windowSize={windowSize}
            />

            <SeparatorComponent className={styles.sepatator}/>

            <DialElement
                time={minutes}
                unit={'Minutes'}
                windowSize={windowSize}
            />

            <SeparatorComponent className={styles.sepatator}/>

            <DialElement
                time={seconds}
                unit={'Seconds'}
                windowSize={windowSize}
            />
        </div>
    );
};