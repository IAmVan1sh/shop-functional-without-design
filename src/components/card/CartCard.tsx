import styles from "./Card.module.scss";
import {FC} from "react";
import {useAppSelector} from "../../store/hooks.ts";
import useActions from "../../hooks/useActions.ts";
import {formatToCurrency} from "../../utils/formatToCurrency.ts";
import {CartItemType} from "../../types/CartTypes.ts";

const Card: FC<CartItemType> = (props) => {
	const basket = useAppSelector(state => state.cart.items);
	const { toggleCart, changeQuantity} = useActions();
	const index = basket.findIndex(element => element.id === props.id);

	const buttonsCounterHandler = async (value: number) => {
		if (value < 0) {
			if (basket[index].quantity + value > 0) {
				changeQuantity({id: props.id, type: "minus"});
			}
		} else {
			if (basket[index].quantity + value < 100) {
				changeQuantity({id: props.id, type: "plus"});
			}
		}
	};

	return (
		<div className={styles.card}>
			<h3>{props.title}</h3>

			<span className={styles.price}>{formatToCurrency(props.price)}</span>

			<div className={styles.card_counter}>
				<button onClick={() => buttonsCounterHandler(-1)}>-</button>

				<span>{basket[index].quantity}</span>

				<button onClick={() => buttonsCounterHandler(1)}>+</button>
			</div>

			<button onClick={() => toggleCart({...props, quantity: 1})}>
				Remove from cart
			</button>
		</div>
	);
};

export default Card;