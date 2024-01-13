import {NavLink} from "react-router-dom";
import {MAIN_ROUTE} from "../../utils/consts.ts";
import styles from "./Basket.module.scss";
import {FC} from "react";
import CartCard from "../../components/layout/card/CartCard.tsx";
import {formatToCurrency} from "../../utils/formatToCurrency.ts";
import {useBasket} from "../../hooks/useBasket.ts";

const Basket: FC = () => {
	const basket = useBasket();
	const totalAmount = basket.reduce((total, currentItem) => total + currentItem.price * currentItem.quantity, 0);
	
	return (
		<main className={styles.body}>

			<section>

				{basket.map(item =>
					<CartCard key={item._id} {...item} />
				)}

				{basket.length === 0 &&
						<div className={styles.emptyCart}>
							<span>There is nothing in your cart</span>
							<NavLink to={MAIN_ROUTE}>Go shopping</NavLink>
						</div>
				}

			</section>

			<section>

				<div className={styles.summary}>

					<h1>Summary</h1>

					<span>PRICE: {formatToCurrency(totalAmount)}</span>

				</div>

			</section>
			
		</main>
	);
};

export default Basket;