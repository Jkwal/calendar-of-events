import {FC, useState} from "react";

import styles from './EventsList.module.scss';

import {IMockEvent, mockEvents} from "utils";
import {EventItem} from "components";


interface EventsListProps {
  windowSize: number;
}

export const EventsList: FC<EventsListProps> = ({windowSize}) => {

  const [activeEventItem, setActiveEventItem] = useState<IMockEvent>(mockEvents[0])

  return (
    <div className={styles.eventList}>
      {
        mockEvents.map((item) => (
          <EventItem
            item={item}
            key={item.id}
            windowSize={windowSize}
            setActiveEventItem={setActiveEventItem}
            isActive={activeEventItem === item}
          />
        ))
      }
    </div>
  )
}