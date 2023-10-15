import styles from "./Card.module.scss";
import {FC} from "react";
import {useAppSelector} from "../../store/hooks.ts";
import useActions from "../../hooks/useActions.ts";
import CartTypes from "../../types/CartTypes.ts";

const Card: FC<CartTypes> = ({product}) => {
	const basket = useAppSelector(state => state.cart);
	const { toggleCart, changeQuantity} = useActions();
	const index = basket.findIndex(element => element.items.id === product.id);

	const buttonsCounterHandler = async (value: number) => {
		if (value < 0) {
			if (basket[index].items.quantity + value > 0) {
				changeQuantity({id: product.id, product: product, quantity: value});
			}
		} else {
			if (basket[index].items.quantity + value < 100) {
				changeQuantity({id: product.id, product: product, quantity: value});
			}
		}
	};

	return (
		<div className={styles.card}>
			<h3>{product.title}</h3>

			<span className={styles.price}>${product.price}</span>

			<div className={styles.card_counter}>
				<button onClick={() => buttonsCounterHandler(-1)}>-</button>

				<span>{basket[index].items.quantity}</span>

				<button onClick={() => buttonsCounterHandler(1)}>+</button>
			</div>

			<button onClick={() => toggleCart({id: product.id, product: product, quantity: 1})}>
				Remove from cart
			</button>
		</div>
	);
};

export default Card;