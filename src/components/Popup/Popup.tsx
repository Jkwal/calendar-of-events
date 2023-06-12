import {FC} from "react";

import styles from './Popup.module.scss';

import {ButtonClose} from "common";
import {ReactComponent as Close} from "assets/icons/close.svg";


interface PopupProps {
  onClose: any
}


export const Popup: FC<PopupProps> = ({onClose}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.wrapper}>
          <Close className={styles.close} onClick={onClose}/>
          <div className={styles.inner}>
            <h3 className={styles.title}>Success</h3>

            <p className={styles.subtitle}>
              You have successfully subscribed to the email newsletter
            </p>

            <ButtonClose onClose={onClose}/>
          </div>
        </div>
      </div>
    </div>

  )
}