import React, {FC} from "react";

import styles from './ButtonSubmit.module.scss';

import {ReactComponent as ArrowRight} from "assets/icons/arrow_right.svg";


interface ButtonSubmitProps {
}


export const ButtonSubmit: FC<ButtonSubmitProps> = () => {

  return (
    <button
      type={"submit"}
      className={styles.buttonSubmit}
    >
      <ArrowRight/>
    </button>
  )
}