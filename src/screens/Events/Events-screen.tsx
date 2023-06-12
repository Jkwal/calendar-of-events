import {FC} from "react";

import styles from './Events-screen.module.scss';

import {EventsList, Title} from "components";

interface EventsScreenProps {
  windowSize: number;
}

export const EventsScreen: FC<EventsScreenProps> = ({windowSize}) => {
  return (
    <section id='event-section' className={styles.eventScreen}>
      <Title heading='All Events'/>
      <EventsList windowSize={windowSize}/>
    </section>
  )
}