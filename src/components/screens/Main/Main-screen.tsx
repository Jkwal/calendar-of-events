import {FC} from "react";

import styles from './Main-screen.module.scss';

import {CheckEvent, Panel, Timer, Title} from "components";
import {ReactComponent as Logo} from "assets/icons/logo-M.svg";
import {ReactComponent as TopLeftSVG} from "assets/icons/abstraction_left-L.svg";
import {ReactComponent as TopRightSVG} from "assets/icons/abstraction_right-L.svg";


export const MainScreen: FC = () => {
    return (
        <section className={styles.mainScreen}>
            <TopLeftSVG className={styles.topLeftSVG}/>
            <TopRightSVG className={styles.topRightSVG}/>

            <div className={styles.wrapper}>
                <Logo/>
                <Title/>
                <Timer/>
                <CheckEvent/>
            </div>

            <Panel/>
        </section>
    )
};