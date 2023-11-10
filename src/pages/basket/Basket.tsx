import {useAppSelector} from "../../store/hooks.ts";
import {NavLink} from "react-router-dom";
import {MAIN_ROUTE} from "../../utils/consts.ts";
import {BiArrowBack} from "react-icons/bi";
import styles from "./Basket.module.scss";
import {FC} from "react";
import CartCard from "../../components/card/CartCard.tsx";
import {formatToCurrency} from "../../utils/formatToCurrency.ts";

const Basket: FC = () => {
	const basket = useAppSelector(state => state.cart.items);
	const totalAmount = basket.reduce((total, currentItem) => total + currentItem.price * currentItem.quantity, 0);
	
	return (
		<main>

			<header className={styles.basket}>
				<NavLink to={MAIN_ROUTE}>
					<BiArrowBack />
				</NavLink>
			</header>

			<div className={styles.body}>

				<section>
					{basket.map(item =>
						<CartCard key={item.id} {...item} />
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

			</div>


		</main>
	);
};

export default Basket;