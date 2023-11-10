import {useGetProductsQuery} from "../../store/api/products.api.ts";
import Card from "../../components/card/Card.tsx";

const Main = () => {
	const { isLoading, data } = useGetProductsQuery();

	return (
		<main>
			<section>
				{isLoading ? <span>Loading...</span> :
					data ? data.map(item =>
						<Card key={item.id} {...item} quantity={1}/>
					) :
						<span>Products NOT FOUND</span>
				}
			</section>
		</main>
	);
};

export default Main;