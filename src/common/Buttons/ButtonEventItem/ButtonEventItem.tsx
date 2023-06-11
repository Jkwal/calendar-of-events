import {FC, ReactNode} from "react";

import styles from './ButtonEventItem.module.scss';


interface ButtonEventItemProps {
  children: ReactNode;
}


export const ButtonEventItem: FC<ButtonEventItemProps> = ({children}) => {
  return (
    <a
      target="_blank"
      className={styles.buttonEventItemProps}
      rel="noopener noreferrer"
      href="https://egorovagency.com/#main"
    >
      {children}
    </a>
  )
}