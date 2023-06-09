import {FC} from "react";

import styles from './Title.module.scss';


export const Title: FC = () => {
	return (
		<div className={styles.title}>
			<h1 className={styles.heading}>Under Construction</h1>
			<p className={styles.subHeading}>We're making lots of improvements and will be back soon</p>
		</div>
	)
}