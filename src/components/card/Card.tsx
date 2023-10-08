import styles from "./Card.module.scss";
import {FC} from "react";
import CardProps from "../../types/CardType.ts";
import {useAppSelector} from "../../store/hooks.ts";
import useActions from "../../hooks/useActions.ts";

const Card: FC<CardProps> = ({card}) => {
	const basket = useAppSelector(state => state.cart);
	const { toggleCart } = useActions();
	const inBasket = basket.some(element => element.id === card.id);

	return (
		<div className={styles.card}>
			<h3>{card.title}</h3>
			<button onClick={() => toggleCart(card)}>
				{!inBasket ? "Add to" : "Remove from"} cart
			</button>
		</div>
	);
};

export default Card;