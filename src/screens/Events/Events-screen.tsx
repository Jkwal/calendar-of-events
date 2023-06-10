import {FC} from "react";

import styles from './Events-screen.module.scss';

import {EventsList, Title} from "components";


export const EventsScreen: FC = () => {
  return (
    <section id='event-section' className={styles.eventScreen}>
      <Title heading='All Events'/>
      <EventsList/>
    </section>
  )
}