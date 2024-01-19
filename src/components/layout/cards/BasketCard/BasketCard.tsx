import styles from "./BasketCard.module.scss";
import {FC} from "react";
import useActions from "../../../../hooks/useActions.ts";
import {formatToCurrency} from "../../../../utils/formatToCurrency.ts";
import {ICartItem} from "../../../../types/CartTypes.ts";
import Button from "../../../ui/button/Button.tsx";
import Counter from "../../../ui/counter/Counter.tsx";

const Card: FC<ICartItem> = (props) => {
	const { toggleCart } = useActions();

	return (
		<div className={styles.card}>
			<img className={styles.cardImage} alt="product photo" src={props.thumbnail}/>

			<h3>{props.title.length > 50 ? `${props.title.slice(0, 48)}...` : props.title}</h3>

			<div className={styles.cardContent}>
				<span className={styles.price}>{formatToCurrency(props.price)}</span>

				<Counter
					_id={props._id}
					quantity={props.quantity}
					className={styles.cardCounter}
				/>
			</div>

			<Button onClick={() => toggleCart({...props, quantity: 1})}>
				Remove from cart
			</Button>
		</div>
	);
};

export default Card;