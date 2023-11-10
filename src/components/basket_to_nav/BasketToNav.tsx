import {Fragment} from "react";
import styles from "./BasketToNav.module.scss";
import {BASKET_ROUTE, MAIN_ROUTE} from "../../utils/consts.ts";
import {NavLink, useLocation} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import {BsBagHeart} from "react-icons/bs";
import {useBasket} from "../../hooks/useBasket.ts";

const BasketToNav = () => {
	const basket = useBasket();
	const currentLocation = useLocation().pathname;

	return (
		<div className={styles.basket}>
			{currentLocation == "/" + BASKET_ROUTE ?
				<NavLink to={MAIN_ROUTE}>
					<BiArrowBack />
				</NavLink>
				:
				<Fragment>
					<span>{basket.length}</span>
					<NavLink to={BASKET_ROUTE}>
						<BsBagHeart />
					</NavLink>
				</Fragment>
			}
		</div>
	);
};

export default BasketToNav;