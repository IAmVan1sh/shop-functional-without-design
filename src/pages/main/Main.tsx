import {useGetProductsQuery} from "../../store/api/products.api.ts";
import Card from "../../components/layout/card/Card.tsx";

const Main = () => {
	const { isLoading, data } = useGetProductsQuery();

	return (
		<main>
			<section>
				{isLoading ? <span>Loading...</span> :
					data ? data.map(item =>
						<Card key={item._id} {...item} quantity={1}/>
					) :
						<span>Products not found</span>
				}
			</section>
		</main>
	);
};

export default Main;