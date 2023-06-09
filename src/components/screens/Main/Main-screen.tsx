import {FC} from "react";

import styles from './Main-screen.module.scss';

import {CheckEvent, Panel, Timer, Title} from "components";
import {ReactComponent as Logo} from "assets/icons/logo-M.svg";


export const MainScreen: FC = () => {
	return (
		<section className={styles.mainScreen}>
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