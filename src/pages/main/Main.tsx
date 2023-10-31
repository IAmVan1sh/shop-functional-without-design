import Card from "../../components/card/Card.tsx";
// import {CardsBase} from "../../assets/DataBase.ts";
import {useAppSelector} from "../../store/hooks.ts";
import styles from "./Main.module.scss";
import {BsBagHeart} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {BASKET_ROUTE} from "../../utils/consts.ts";
import useActions from "../../hooks/useActions.ts";
// import {useEffect} from "react";

const Main = () => {
	const basket = useAppSelector(state => state.cart.items);
	const { isLoading, error, items} = useAppSelector(state => state.fetchCart);
	const { getCart } = useActions();

	// useEffect(() => {
	// 	getCart("https://dummyjson.com/products");
	// });

	return (
		<main>

			<header className={styles.main_header}>
				<NavLink to={BASKET_ROUTE}>
					<BsBagHeart />
				</NavLink>
				<span>{basket.length}</span>
			</header>

			<section>
				<button onClick={() => getCart("https://dummyjson.com/products")}>
					Get items
				</button>

				{/*{CardsBase.map(product =>*/}
				{/*	<Card key={product.id} id={product.id} product={product}/>*/}
				{/*)}*/}

				{/*{isLoading ? (*/}
				{/*	<span>LOADING...</span>*/}
				{/*) : error ? (*/}
				{/*	<span>Error occurred: {error}</span>*/}
				{/*) : items ? (*/}
				{/*	items.map(product =>*/}
				{/*		<Card key={product.id} id={product.id} product={{*/}
				{/*			id: product.id,*/}
				{/*			title: product.title,*/}
				{/*			description: product.description,*/}
				{/*			price: product.price*/}
				{/*		}}/>*/}
				{/*	)*/}
				{/*) :*/}
				{/*	<span>ITEMS NOT FOUND</span>*/}
				{/*}*/}
			</section>

		</main>
	);
};

export default Main;