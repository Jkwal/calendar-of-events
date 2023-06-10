import {FC} from "react";

import styles from './EventItem.module.scss';

import {ImockEvent} from "utils";

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
    <>
      <div className={styles.event} style={backgroundStyle}>
        <div className={styles.title}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.number}>0{item.id}</div>
        </div>
      </div>

      <div className={styles.description} style={backgroundStyleDescription}>
        <div className={styles.info}>
          <div className={styles.wrapper}>
            <h3 className={styles.descriptionName}>{item.name}</h3>
            <p className={styles.date}>{item.date}</p>
            <button>More Information</button>
          </div>
        </div>
      </div>
    </>

  )
}