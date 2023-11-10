import {api} from "./api.ts";
import {CartItemType} from "../../types/CartTypes.ts";

export const productsApi = api.injectEndpoints({
	endpoints: build => ({
		getProducts: build.query<CartItemType[], void>({
			query: () => "/",
		}),
		getProductById: build.query<CartItemType, number>({
			query: id => `/${id}`,
		}),
		createProducts: build.mutation<CartItemType, Partial<CartItemType> & Pick<CartItemType, "id">>({
			query: (product) => ({
				body: product,
				url: "/",
				method: "POST",
			})
		})
	})
});

export const { useGetProductsQuery } = productsApi;