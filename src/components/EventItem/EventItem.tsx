import {FC} from "react";

import styles from './EventItem.module.scss';

import {IMockEvent} from "utils";
import {ButtonEventItem} from "common";

interface EventItemProps {
  item: IMockEvent;
  isActive: boolean;
  windowSize: number;
  setActiveEventItem: (item: IMockEvent) => void;
}

export const EventItem: FC<EventItemProps> = ({
                                                item,
                                                isActive,
                                                windowSize,
                                                setActiveEventItem
                                              }) => {

  const backgroundStyle = {
    backgroundImage: `linear-gradient(${windowSize <= 768 ? `270deg` : `180deg`}, rgba(22, 44, 78, 0) 0%, #162C4E 100%), url(${item.image})`,
  };

  const backgroundStyleDescription = {
    backgroundImage: `url(${item.image})`,
  };

  return (
    <div className={`${styles.event} ${isActive ? styles.active : ''}`}>
      <div
        style={item.id !== 1 ? backgroundStyle : {}}
        className={styles.title}
        onClick={() => !isActive ? setActiveEventItem(item) : null}
      >
          <div className={styles.titleWrapper}>
              <div className={styles.nameWrapper}>
                  <div className={styles.name}>{item.name}</div>
              </div>
              <div className={styles.number}>0{item.id}</div>
          </div>

      </div>

      <div className={styles.animationWrapper}>
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

    </div>
  )
}