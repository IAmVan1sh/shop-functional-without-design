import {Fragment} from "react";
import styles from "./NavToBasket.module.scss";
import {BASKET_ROUTE, MAIN_ROUTE} from "../../../utils/consts.ts";
import {NavLink, useLocation} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import {BsBagHeart} from "react-icons/bs";
import {useBasket} from "../../../hooks/useBasket.ts";

const NavToBasket = () => {
	const basket = useBasket();
	const currentLocation = useLocation().pathname;

	return (
		<div className={styles.buttonToBasket}>
			{currentLocation == "/" + BASKET_ROUTE ?
				<NavLink to={MAIN_ROUTE}>
					<BiArrowBack />
				</NavLink>
				:
				<Fragment>
					<NavLink to={BASKET_ROUTE}>
						<BsBagHeart />
					</NavLink>
					<span>{basket.length}</span>
				</Fragment>
			}
		</div>
	);
};

export default NavToBasket;