import {FC} from "react";

import styles from './CheckEvent.module.scss';

import {ButtonLink} from "common";
import {onAnimationStart} from "utils";


export const CheckEvent: FC = () => {
  return (
    <div
      className={`${styles.checkEvent} ${styles.marginAnimation} no-margin`}
      onAnimationStart={onAnimationStart}
    >
      <p className={styles.title}>Check our event page when you wait:</p>

      <ButtonLink>Go to the event</ButtonLink>
    </div>
  )
}