import {FC, ReactNode} from "react";

import styles from './ButtonLink.module.scss';

import {ReactComponent as ArrowRight} from 'assets/icons/arrow_right.svg';


interface ButtonLinkProps {
	children: ReactNode;
}


export const ButtonLink: FC<ButtonLinkProps> = ({children}) => {
	return (
		<button className={styles.buttonLink}>
			<a className={styles.link}>{children}</a>
			<ArrowRight className={styles.arrow}/>
		</button>
	)
}