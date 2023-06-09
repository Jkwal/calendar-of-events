import {FC, ReactNode} from "react";

import styles from './ButtonAnchor.module.scss';

import {ReactComponent as ArrowDown} from 'assets/icons/arrow_down.svg';


interface ButtonAnchorProps {
  children: ReactNode;
}


export const ButtonAnchor: FC<ButtonAnchorProps> = ({children}) => {

  const handleClick = () => {
    const element = document.getElementById('event-section')
    element.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  return (
    <button
      className={styles.buttonAnchor}
      onClick={handleClick}
    >
      <p className={styles.text}>{children}</p>
      <ArrowDown className={styles.arrow}/>
    </button>
  )
}