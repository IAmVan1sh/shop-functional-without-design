import {useGetProductsQuery} from "../../store/api/products.api.ts";
import CatalogCard from "../../components/layout/cards/CatalogCard/CatalogCard.tsx";

const Main = () => {
	const { isLoading, data } = useGetProductsQuery();

	return (
		<main>
			<section>
				{isLoading ? <span>Loading...</span> :
					data ? data.map(item =>
						<CatalogCard key={item._id} {...item} quantity={1}/>
					) :
						<span>Products not found</span>
				}
			</section>
		</main>
	);
};

export default Main;