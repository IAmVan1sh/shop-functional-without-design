import {useAppSelector} from "../../store/hooks.ts";
import {NavLink} from "react-router-dom";
import {MAIN_ROUTE} from "../../utils/consts.ts";
import {BiArrowBack} from "react-icons/bi";
import styles from "./Basket.module.scss";
import {FC} from "react";
import CartCard from "../../components/card/CartCard.tsx";

const Basket: FC = () => {
	const basket = useAppSelector(state => state.cart.items);
	let sum = 0;

	for (const num of basket) {
		const temp = num.product.price * num.quantity;
		sum += temp;
	}
	
	return (
		<main>

			<header className={styles.basket}>
				<NavLink to={MAIN_ROUTE}>
					<BiArrowBack />
				</NavLink>
			</header>

			<div className={styles.body}>

				<section>
					{basket.map(cart =>
						<CartCard key={cart.id} id={cart.id} product={cart.product} quantity={1}/>
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

						<span>PRICE: ${sum.toFixed(2)}</span>

					</div>

				</section>

			</div>


		</main>
	);
};

export default Basket;