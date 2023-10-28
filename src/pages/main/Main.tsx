import Card from "../../components/card/Card.tsx";
import {CardsBase} from "../../assets/DataBase.ts";
import {useAppSelector} from "../../store/hooks.ts";
import styles from "./Main.module.scss";
import {BsBagHeart} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {BASKET_ROUTE} from "../../utils/consts.ts";

const Main = () => {
	const basket = useAppSelector(state => state.cart.items);

	return (
		<main>

			<header className={styles.main_header}>
				<NavLink to={BASKET_ROUTE}>
					<BsBagHeart />
				</NavLink>
				<span>{basket.length}</span>
			</header>

			<section>
				{CardsBase.map(product =>
					<Card key={product.id} id={product.id} product={product}/>
				)}
			</section>

		</main>
	);
};

export default Main;