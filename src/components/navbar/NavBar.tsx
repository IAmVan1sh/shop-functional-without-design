import styles from "./NavBar.module.scss";
import BasketToNav from "../basket_to_nav/BasketToNav.tsx";
import AddProductModal from "../add_product_modal/AddProductModal.tsx";

const NavBar = () => {
	return (
		<header className={styles.header}>
			<AddProductModal/>
			<BasketToNav/>
		</header>
	);
};

export default NavBar;