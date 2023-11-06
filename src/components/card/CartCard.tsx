import styles from "./Card.module.scss";
import {FC} from "react";
import {useAppSelector} from "../../store/hooks.ts";
import useActions from "../../hooks/useActions.ts";
import {CartItem} from "../../types/CartTypes.ts";
import {formatToCurrency} from "../../utils/formatToCurrency.ts";

const Card: FC<CartItem> = ({product}) => {
	const basket = useAppSelector(state => state.cart.items);
	const { toggleCart, changeQuantity} = useActions();
	const itemIndex = basket.findIndex(element => element.id === product.id);

	const buttonsCounterHandler = (action: "minus" | "plus") => {
		if (action === "minus") {
			if (basket[itemIndex].quantity - 1 > 0) {
				changeQuantity({id: product.id, type: action});
			}
		} else {
			if (basket[itemIndex].quantity + 1 < 100) {
				changeQuantity({ id: product.id, type: action});
			}
		}
	};

	return (
		<div className={styles.card}>
			<div style={{display: "flex"}}>

				<img alt={`${product.title}${product.brand}.jpg`} src={product.thumbnail}/>

				<div className={styles.cartCardContainer}>

					<h3>{product.title} ({product.brand})</h3>

					<span>{product.description}</span>

					<div className={styles.card_counter}>
						<button onClick={() => buttonsCounterHandler("minus")}>-</button>

						<span>{basket[itemIndex].quantity}</span>

						<button onClick={() => buttonsCounterHandler("plus")}>+</button>
					</div>

					<div className={styles.addToCart}>

						<span>{formatToCurrency(product.price)}</span>

						<button onClick={() => toggleCart({id: product.id,product: product, quantity: 1})}>
							Remove from cart
						</button>

					</div>

				</div>

			</div>

		</div>
	);
};

export default Card;