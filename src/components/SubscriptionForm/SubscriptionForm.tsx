import React, {FC} from "react";
import {ButtonSubmit, Input} from "common";

import styles from './SubscriptionForm.module.scss';


export const SubscriptionForm: FC = () => {

  return (
    <form
      className={styles.subscriptionForm}
    >
      <Input
        placeholder="Enter your Email and get notified"
      />
      <ButtonSubmit/>
    </form>
  )
}
