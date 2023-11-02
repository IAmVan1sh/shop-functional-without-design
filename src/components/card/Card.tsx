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
			<img alt={`${product.title}${product.brand}.jpg`} src={product.thumbnail}/>

			<h3>{product.title} ({product.brand})</h3>

			<span>{product.description}</span>

			<div className={styles.addToCart}>
				<span>{formatToCurrency(product.price)}</span>

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

		</div>
	);
};

export default Card;