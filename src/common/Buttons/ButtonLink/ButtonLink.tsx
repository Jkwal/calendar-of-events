import {FC, ReactNode} from "react";

import styles from './ButtonLink.module.scss';

import {ReactComponent as ArrowRight} from 'assets/icons/arrow_right.svg';


interface ButtonLinkProps {
  children: ReactNode;
}


export const ButtonLink: FC<ButtonLinkProps> = ({children}) => {
  return (
    <a
      target="_blank"
      className={styles.buttonLink}
      rel="noopener noreferrer"
      href="https://egorovagency.com/#main"
    >
      {children}
      <ArrowRight className={styles.arrow}/>
    </a>
  )
}