import styles from "./NavBar.module.scss";
import NavToBasket from "../nav_to_basket/NavToBasket.tsx";
import AddProductModal from "../add_product_modal/AddProductModal.tsx";

const NavBar = () => {
	return (
		<header className={styles.header}>
			<AddProductModal/>
			<NavToBasket/>
		</header>
	);
};

export default NavBar;