import Card from "../../components/card/Card.tsx";
import {useAppSelector} from "../../store/hooks.ts";
import styles from "./Main.module.scss";
import {BsBagHeart} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {BASKET_ROUTE} from "../../utils/consts.ts";
import {useGetProductsQuery} from "../../store/api/products.api.ts";

const Main = () => {
	const basket = useAppSelector(state => state.cart.items);
	const { isLoading, data } = useGetProductsQuery();

	return (
		<main>

			<header className={styles.main_header}>
				<NavLink to={BASKET_ROUTE}>
					<BsBagHeart />
				</NavLink>
				<span>{basket.length}</span>
			</header>

			<section>
				{isLoading ? <span>Loading...</span> :
					data ? data.map(item =>
						<Card key={item.id} {...item}/>
					) :
						<span>Products NOT FOUND</span>
				}
			</section>

		</main>
	);
};

export default Main;