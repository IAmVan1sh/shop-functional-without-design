import styles from "./Card.module.scss";
import {FC} from "react";
import useActions from "../../../hooks/useActions.ts";
import {formatToCurrency} from "../../../utils/formatToCurrency.ts";
import {useAppSelector} from "../../../hooks/typedHooks.ts";
import {CartItemType} from "../../../types/CartTypes.ts";
import Button from "../../ui/button/Button.tsx";
import {useDeleteProductMutation} from "../../../store/api/products.api.ts";

const Card: FC<CartItemType> = (props) => {
	const basket = useAppSelector(state => state.cart.items);
	const [ deleteProduct ] = useDeleteProductMutation();
	const { toggleCart} = useActions();

	return (
		<div className={styles.card}>

			<div className={styles.cardContent}>
				<h3>{props.title}</h3>

				<span className={styles.price}>{formatToCurrency(props.price)}</span>

				<Button onClick={() => toggleCart({...props, quantity: 1})}>
					{
						basket.some(item => item._id === props._id)
							?
							"Remove from cart"
							:
							"Add to cart"
					}
				</Button>
			</div>

			<div className={styles.cardManage}>
				<Button onClick={() => deleteProduct(props._id)}>delete product</Button>
			</div>

		</div>
	);
};

export default Card;