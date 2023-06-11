import {FC, useState} from "react";

import styles from './EventsList.module.scss';

import {ImockEvent, mockEvents} from "utils";
import {EventItem} from "components";


export const EventsList: FC = () => {

  const [activeEventItem, setActiveEventItem] = useState<ImockEvent>(mockEvents[0])

  return (
    <div className={styles.eventList}>
      {
        mockEvents.map((item) => (
          <EventItem
            isActive={activeEventItem === item}
            setActiveEventItem={setActiveEventItem}
            key={item.id}
            item={item}
          />
        ))
      }
    </div>
  )
}