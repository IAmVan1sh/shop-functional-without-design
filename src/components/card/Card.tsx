import styles from "./Card.module.scss";
import {FC} from "react";
import CardProps from "../../types/CardType.ts";
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import {CartActions} from "../../store/cart/Cart.slice.ts";

const Card: FC<CardProps> = ({card}) => {
	const basket = useAppSelector(state => state.cart);
	const dispatch = useAppDispatch();
	const { toggleCart } = CartActions;
	const inBasket = basket.some(element => element.id === card.id);

	return (
		<div className={styles.card}>
			<h3>{card.title}</h3>
			<button onClick={() => dispatch(toggleCart(card))}>
				{!inBasket ? "Add to" : "Remove from"} cart
			</button>
		</div>
	);
};

export default Card;