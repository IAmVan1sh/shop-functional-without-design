import styles from "./Card.module.scss";
import {FC} from "react";
import {useAppSelector} from "../../store/hooks.ts";
import useActions from "../../hooks/useActions.ts";
import {CartItem} from "../../types/CartTypes.ts";
import {formatToCurrency} from "../../utils/formatToCurrency.ts";

const Card: FC<CartItem> = ({product}) => {
	const basket = useAppSelector(state => state.cart.items);
	const { toggleCart, changeQuantity} = useActions();
	const index = basket.findIndex(element => element.id === product.id);

	const buttonsCounterHandler = async (value: number) => {
		if (value < 0) {
			if (basket[index].quantity + value > 0) {
				changeQuantity({product: product, quantity: value});
			}
		} else {
			if (basket[index].quantity + value < 100) {
				changeQuantity({product: product, quantity: value});
			}
		}
	};

	return (
		<div className={styles.card}>
			<h3>{product.title}</h3>

			<span className={styles.price}>{formatToCurrency(product.price)}</span>

			<div className={styles.card_counter}>
				<button onClick={() => buttonsCounterHandler(-1)}>-</button>

				<span>{basket[index].quantity}</span>

				<button onClick={() => buttonsCounterHandler(1)}>+</button>
			</div>

			<button onClick={() => toggleCart({product: product, quantity: 1})}>
				Remove from cart
			</button>
		</div>
	);
};

export default Card;