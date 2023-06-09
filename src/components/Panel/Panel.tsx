import {FC} from "react";

import style from './Panel.module.scss';

import {ButtonAnchor} from "common";
import {SubscriptionForm} from "components";


export const Panel: FC = () => {
	return (
		<div className={style.panel}>
			<SubscriptionForm/>
			<ButtonAnchor>Other Events</ButtonAnchor>
		</div>
	)
}