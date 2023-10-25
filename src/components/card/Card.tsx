import styles from "./Card.module.scss";
import {FC} from "react";
import useActions from "../../hooks/useActions.ts";
import CardType from "../../types/CardTypes.ts";
import {formatToCurrency} from "../../utils/formatToCurrency.ts";

const Card: FC<CardType> = ({product}) => {
	const { toggleCart} = useActions();

	return (
		<div className={styles.card}>
			<h3>{product.title}</h3>

			<span className={styles.price}>{formatToCurrency(product.price)}</span>

			<button onClick={() => toggleCart({product: product, quantity: 1})}>
				Add to cart
			</button>
		</div>
	);
};

export default Card;