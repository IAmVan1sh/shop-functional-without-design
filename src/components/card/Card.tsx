import styles from "./Card.module.scss";
import {FC} from "react";
import useActions from "../../hooks/useActions.ts";
import CardType from "../../types/CardTypes.ts";
import {formatToCurrency} from "../../utils/formatToCurrency.ts";
import {useAppSelector} from "../../store/hooks.ts";

const Card: FC<CardType> = ({product}) => {
	const basket = useAppSelector(state => state.cart.items);
	const { toggleCart} = useActions();

	return (
		<div className={styles.card}>
			<h3>{product.title}</h3>

			<span className={styles.price}>{formatToCurrency(product.price)}</span>

			<span >{product.description}</span>

			<button onClick={() => toggleCart({product: product, quantity: 1})}>
				{
					basket.some(item => item.id === product.id)
						?
						"Remove from cart"
						:
						"Add to cart"
				}
			</button>
		</div>
	);
};

export default Card;