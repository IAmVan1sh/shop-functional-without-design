import styles from "./Card.module.scss";
import {FC} from "react";
import {useAppSelector} from "../../../hooks/typedHooks.ts";
import useActions from "../../../hooks/useActions.ts";
import {formatToCurrency} from "../../../utils/formatToCurrency.ts";
import {CartItemType} from "../../../types/CartTypes.ts";
import Button from "../../ui/button/Button.tsx";
import Input from "../../ui/Input/Input.tsx";

const Card: FC<CartItemType> = (props) => {
	const basket = useAppSelector(state => state.cart.items);
	const index = basket.findIndex(element => element._id === props._id);
	const { toggleCart, changeQuantity} = useActions();

	return (
		<div className={styles.card}>
			<h3>{props.title}</h3>

			<span className={styles.price}>{formatToCurrency(props.price)}</span>

			<div className={styles.card_counter}>
				<Button plusMinus onClick={() => changeQuantity({id: props._id, value: props.quantity - 1})}>-</Button>

				<Input
					type="number"
					value={basket[index].quantity}
					onChange={event => changeQuantity({id: props._id, value: Number(event.target.value)})}
				/>

				<Button plusMinus onClick={() => changeQuantity({id: props._id, value: props.quantity + 1})}>+</Button>
			</div>

			<Button onClick={() => toggleCart({...props, quantity: 1})}>
				Remove from cart
			</Button>
		</div>
	);
};

export default Card;