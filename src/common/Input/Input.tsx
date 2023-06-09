import {FC} from "react";

import styles from './Input.module.scss';


interface InputProps {
	placeholder: string;
}


export const Input: FC<InputProps> = ({placeholder}) => {
	return (
		<label>
			<input className={styles.input} placeholder={placeholder}/>
		</label>
	)
}