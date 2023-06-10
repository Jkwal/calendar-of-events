import {FC, useEffect, useState} from "react";

import styles from './Main-screen.module.scss';

import {CheckEvent, Panel, Timer, Title} from "components";
import {ReactComponent as LogoM} from "assets/icons/logo-M.svg";
import {ReactComponent as LogoS} from "assets/icons/logo-S.svg";

import {ReactComponent as LeftSvgL} from 'assets/icons/abstraction_left-L.svg';
import {ReactComponent as RightSvgL} from 'assets/icons/abstraction_right-L.svg';

import {ReactComponent as LeftSvgM} from 'assets/icons/abstraction_left-M.svg';
import {ReactComponent as RightSvgM} from 'assets/icons/abstraction_right-M.svg';

import {ReactComponent as LeftSvgS} from 'assets/icons/abstraction_left-S.svg';
import {ReactComponent as RightSvgS} from 'assets/icons/abstraction_right-S.svg';

export const MainScreen: FC = () => {

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
        <section className={styles.mainScreen}>

            <LeftSvgComponent className={styles.LeftSvg}/>
            <RightSvgComponent className={styles.RightSvg}/>

            <div className={styles.wrapper}>
                <LogoComponent/>
                <Title/>
                <Timer windowSize={windowSize}/>
                <CheckEvent/>
            </div>

            <Panel/>
        </section>
    )
};