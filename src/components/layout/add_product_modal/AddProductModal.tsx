import {Fragment, useState} from "react";
import styles from "./AddProductModal.module.scss";
import Button from "../../ui/button/Button.tsx";
import Input from "../../ui/Input/Input.tsx";

const AddProductModal = () => {
	const [modal, setModal] = useState<"none" | "block">("none");

	function modalHandler() {
		if (modal === "none") {
			setModal("block");
		} else {
			setModal("none");
		}
	}

	return (
		<Fragment>

			<Button className={styles.addProductButton} onClick={() => modalHandler()}>Add new product</Button>

			{/* Modal */}

			<div
				className={styles.modal}
				onMouseDown={() => modalHandler()}
				style={{display: `${modal as string}`}}
			>
				<section
					className={styles.modalContent}
					onMouseDown={e => e.stopPropagation()}
				>
					<h2>Add new product</h2>

					<label>Name</label>
					<Input/>

					<label>Brand</label>
					<Input/>

					<label>Category</label>
					<Input/>

					<label>Description</label>
					<Input/>

					<label>stock</label>
					<Input/>

					<label>price</label>
					<Input/>

				</section>
			</div>

		</Fragment>
	);
};

export default AddProductModal;