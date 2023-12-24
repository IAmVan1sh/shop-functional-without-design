import {api} from "./api.ts";
import {CartItemType} from "../../types/CartTypes.ts";
import {FetchedProductsType} from "../../types/ProductTypes.ts";

export const productsApi = api.injectEndpoints({
	endpoints: build => ({
		getProductById: build.query<FetchedProductsType, number>({
			query: id => `/${id}`,
		}),
		createProducts: build.mutation<FetchedProductsType, Partial<FetchedProductsType> & Pick<CartItemType, "id">>({
			query: (product) => ({
				body: product,
				url: "/",
				method: "POST",
			}),
			invalidatesTags: () => [{
				type: "Product",
			}]
		})
	})
});

export const { useGetProductsQuery, useCreateProductsMutation } = productsApi;