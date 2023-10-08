import {useAppSelector} from "../../store/hooks.ts";
import Card from "../../components/card/Card.tsx";
import {NavLink} from "react-router-dom";
import {MAIN_ROUTE} from "../../utils/consts.ts";
import {BiArrowBack} from "react-icons/bi";
import styles from "./Basket.module.scss";

const Basket = () => {
	const basket = useAppSelector(state => state.cart);

	return (
		<main>
			<header className={styles.basket}>
				<NavLink to={MAIN_ROUTE}>
					<BiArrowBack />
				</NavLink>
			</header>
			<section>
				{basket.map(card =>
					<Card key={card.id} card={card}/>
				)}
			</section>
		</main>
	);
};

export default Basket;