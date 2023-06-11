import {FC} from "react";

import styles from './EventsList.module.scss';

import {mockEvents} from "utils";
import {EventItem} from "components";


export const EventsList: FC = () => {

  return (
    <div className={styles.eventList}>
      {
        mockEvents.map((item) => (
            <EventItem key={item.id} item={item}/>
        ))
      }
    </div>
  )
}