import styles from "./Card.module.scss";
import {FC} from "react";
import {useAppSelector} from "../../../hooks/typedHooks.ts";
import useActions from "../../../hooks/useActions.ts";
import {formatToCurrency} from "../../../utils/formatToCurrency.ts";
import {CartItemType} from "../../../types/CartTypes.ts";
import Button from "../../ui/button/Button.tsx";

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
				<Button plusMinus onClick={() => buttonsCounterHandler(-1)}>-</Button>

				<span>{basket[index].quantity}</span>

				<Button plusMinus onClick={() => buttonsCounterHandler(1)}>+</Button>
			</div>

			<Button onClick={() => toggleCart({...props, quantity: 1})}>
				Remove from cart
			</Button>
		</div>
	);
};

export default Card;