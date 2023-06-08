import {FC} from "react";

import styles from './HomePage.module.scss';

import {EventsScreen, MainScreen} from "components";


export const HomePage: FC = () => {
    return (
        <main className={styles.homePage}>
            <MainScreen/>
            <EventsScreen/>
        </main>
    )
}