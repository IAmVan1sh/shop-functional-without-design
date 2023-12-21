import styles from "./Card.module.scss";
import {FC} from "react";
import useActions from "../../../hooks/useActions.ts";
import {formatToCurrency} from "../../../utils/formatToCurrency.ts";
import {useAppSelector} from "../../../hooks/typedHooks.ts";
import {CartItemType} from "../../../types/CartTypes.ts";
import Button from "../../ui/button/Button.tsx";

const Card: FC<CartItemType> = (props) => {
	const basket = useAppSelector(state => state.cart.items);
	const { toggleCart} = useActions();

	return (
		<div className={styles.card}>
			<h3>{props.title}</h3>

			<span className={styles.price}>{formatToCurrency(props.price)}</span>

			<Button onClick={() => toggleCart({...props, quantity: 1})}>
				{
					basket.some(item => item.id === props.id)
						?
						"Remove from cart"
						:
						"Add to cart"
				}
			</Button>
		</div>
	);
};

export default Card;