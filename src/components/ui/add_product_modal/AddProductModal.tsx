import {FormEvent, Fragment, useState} from "react";
import styles from "./AddProductModal.module.scss";
import Button from "../button/Button.tsx";
import Input from "../Input/Input.tsx";
import {CreateProductType} from "../../../types/ProductTypes.ts";
import { useCreateProductsMutation } from "../../../store/api/products.api.ts";

const defaultFormValue: CreateProductType = {
	title: "",
	description: "",
	price: 0,
	discountPercentage: 0,
	rating: 0,
	stock: 0,
	brand: "",
	category: "",
	thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
	images: [
		"https://i.dummyjson.com/data/products/1/1.jpg",
		"https://i.dummyjson.com/data/products/1/2.jpg",
		"https://i.dummyjson.com/data/products/1/3.jpg",
		"https://i.dummyjson.com/data/products/1/4.jpg",
		"https://i.dummyjson.com/data/products/1/thumbnail.jpg"
	]
};

const AddProductModal = () => {
	const [	modal, setModal ] = useState<"none" | "flex">("none");
	const [	product, setProduct ] = useState<CreateProductType>(defaultFormValue);
	const [ createProduct ] = useCreateProductsMutation();

	function modalHandler() {
		if (modal === "none") {
			setModal("flex");
		} else {
			setModal("none");
		}
	}

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		createProduct(product).then(() => {
			setProduct(defaultFormValue);
		});
	}

	function counterHandler(value: number, currentCounter: string) {
		if (value >= 0 && value <= 1000000) {
			setProduct({...product, [currentCounter]: value});
		} else if (value > 1000000) {
			setProduct({...product, [currentCounter]: 1000000});
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
					<form onSubmit={event => handleSubmit(event)}>

						<h2>Add new product</h2>

						<label>Title</label>
						<Input
							type="text"
							placeholder="Product title"
							value={product.title}
							onChange={event => setProduct({...product, title: event.target.value})}
						/>

						<label>Brand</label>
						<Input
							type="text"
							placeholder="Product brand"
							value={product.brand}
							onChange={event => setProduct({...product, brand: event.target.value})}
						/>

						<label>Category</label>
						<Input
							type="text"
							placeholder="Product category"
							value={product.category}
							onChange={event => setProduct({...product, category: event.target.value})}
						/>

						<label>Description</label>
						<Input
							type="text"
							placeholder="Product description"
							value={product.description}
							onChange={event => setProduct({...product, description: event.target.value})}
						/>

						<label htmlFor="stock">Stock</label>
						<Input
							id="stock"
							type="number"
							placeholder="Product stock"
							value={product.stock}
							onChange={event => counterHandler(Number(event.target.value), event.target.id)}
						/>

						<label>Price</label>
						<Input
							id="price"
							type="number"
							placeholder="Product price"
							value={product.price}
							onChange={event => counterHandler(Number(event.target.value), event.target.id)}
						/>

						<Button type="submit" onClick={modalHandler}>Create</Button>

					</form>
				</section>
			</div>

		</Fragment>
	);
};

export default AddProductModal;