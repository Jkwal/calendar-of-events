import ReactDOM from 'react-dom';
import React, {ChangeEvent, FC, FormEvent, useState} from "react";

import styles from './SubscriptionForm.module.scss';

import {Popup} from "components";
import {isValidEmail} from "utils";
import {ButtonSubmit, Input} from "common";


export const SubscriptionForm: FC = () => {

  const [email, setEmail] = useState('');
  const [isValid, setValid] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setValid(true)
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !isValidEmail(email)) {
      return setValid(false);
    }

    if (isValidEmail(email)) {
      setEmail('')
      return setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={styles.subscriptionForm}
      >
        <Input
          value={email}
          isValid={isValid}
          onChange={handleChange}
          placeholder={"Enter your Email and get notified"}
        />
        <ButtonSubmit/>
        {
          !isValid &&
            <div className={styles.error}>Invalid Email!!!</div>
        }
      </form>

      {showPopup &&
        ReactDOM.createPortal(
          <Popup onClose={handleClosePopup}/>,
          document.getElementById('popup-root')
        )}
    </>
  )
}
