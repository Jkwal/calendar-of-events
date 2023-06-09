import {FC} from "react";

import styles from './CheckEvent.module.scss';

import {ButtonLink} from "common";


export const CheckEvent: FC = () => {
	return (
		<div className={styles.checkEvent}>
			<p className={styles.title}>Check our event page when you wait:</p>

			<ButtonLink>Go to the event</ButtonLink>
		</div>
	)
}