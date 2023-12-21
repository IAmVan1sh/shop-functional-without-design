import {api} from "./api.ts";
import {CartItemType} from "../../types/CartTypes.ts";
import ProductType, {FetchedProductsType} from "../../types/ProductTypes.ts";

export const productsApi = api.injectEndpoints({
	endpoints: build => ({
		getProducts: build.query<ProductType[], void>({
			query: () => "/",
			transformResponse: (response: FetchedProductsType) => response.products,
		}),
		getProductById: build.query<FetchedProductsType, number>({
			query: id => `/${id}`,
		}),
		createProducts: build.mutation<FetchedProductsType, Partial<FetchedProductsType> & Pick<CartItemType, "id">>({
			query: (product) => ({
				body: product,
				url: "/",
				method: "POST",
			})
		})
	})
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;