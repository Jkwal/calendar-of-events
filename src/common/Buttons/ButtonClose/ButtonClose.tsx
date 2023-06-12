import {FC} from "react";

import styles from './ButtonClose.module.scss';


interface ButtonCloseProps {
  onClose: any
}


export const ButtonClose: FC<ButtonCloseProps> = ({onClose}) => {
  return (
    <button onClick={onClose} className={styles.buttonClose}>
      Close
    </button>
  )
}