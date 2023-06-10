import {FC} from "react";

import styles from './Title.module.scss';

import {onAnimationStart} from "utils";


interface TitleProps {
    heading: string;
    subHeading?: string;
}

export const Title: FC<TitleProps> = ({heading, subHeading}) => {
    return (
        <div
            className={`${styles.title} ${styles.marginAnimation} no-margin`}
            onAnimationStart={onAnimationStart}
        >
            <h2 className={styles.heading}>{heading}</h2>
            {
                subHeading && <p className={styles.subHeading}>{subHeading}</p>
            }
        </div>
    )
}