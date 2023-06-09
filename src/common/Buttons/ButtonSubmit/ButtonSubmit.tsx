import {FC} from "react";

import styles from './ButtonSubmit.module.scss';

import {ReactComponent as ArrowRight} from "assets/icons/arrow_right.svg";

export const ButtonSubmit: FC = () => {
	return (
		<button type={"submit"} className={styles.buttonSubmit}>
			<ArrowRight/>
		</button>
	)
}