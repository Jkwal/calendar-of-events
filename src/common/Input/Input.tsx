import React, {FC} from "react";

import styles from './Input.module.scss';


interface InputProps {
  value: string;
  isValid: boolean;
  placeholder: string;
  onChange: any;
}


export const Input: FC<InputProps> = ({
                                        value,
                                        isValid,
                                        onChange,
                                        placeholder
                                      }) => {

  return (
    <input
      type="email"
      name="email"
      value={value}
      onChange={onChange}
      className={`${styles.input} ${!isValid && styles.invalid}`}
      placeholder={placeholder}
    />
  )
}