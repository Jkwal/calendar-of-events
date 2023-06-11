import {FC} from "react";

import styles from './EventItem.module.scss';

import {ImockEvent} from "utils";
import {ButtonEventItem} from "common";

interface EventItemProps {
  item: ImockEvent;
}

export const EventItem: FC<EventItemProps> = ({item}) => {

  const backgroundStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(22, 44, 78, 0) 0%, #162C4E 100%), url(${item.image})`,
  };

  const backgroundStyleDescription = {
    backgroundImage: `url(${item.image})`,
  };

  return (
    <div className={styles.event}>
      <div className={styles.title} style={backgroundStyle}>

        <div className={styles.name}>{item.name}</div>
        <div className={styles.number}>0{item.id}</div>

      </div>

      <div className={styles.description} style={backgroundStyleDescription}>

        <div className={styles.info}>
          <p className={styles.backgroundNumber}>
            0{item.id}
          </p>

          <div className={styles.wrapper}>
            <h3 className={styles.descriptionName}>{item.name}</h3>
            <p className={styles.date}>{item.date}</p>
            <ButtonEventItem>More Information</ButtonEventItem>

          </div>
        </div>
      </div>
    </div>
  )
}