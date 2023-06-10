import React, {FC} from "react";

import styles from './Input.module.scss';


interface InputProps {
  placeholder: string;
}


export const Input: FC<InputProps> = ({placeholder}) => {

  return (
    <input
      type="email"
      name="email"
      className={styles.input}
      placeholder={placeholder}
    />
  )
}