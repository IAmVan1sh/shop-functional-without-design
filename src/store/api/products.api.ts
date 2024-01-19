import {api} from "./api.ts";
import IProduct, {ICreateProduct} from "../../types/ProductTypes.ts";

export const productsApi = api.injectEndpoints({
	endpoints: build => ({
		getProductById: build.query<IProduct[], number>({
			query: id => `/${id}`,
		}),
		createProducts: build.mutation<IProduct, Partial<ICreateProduct>>({
			query: (product) => ({
				body: product,
				url: "/product/create-product",
				method: "POST",
			}),
			invalidatesTags: () => [{
				type: "Product",
			}]
		}),
		deleteProduct: build.mutation<string,  string>({
			query: (_id) => ({
				body: {_id},
				url: "/product/delete-product",
				method: "DELETE"
			}),
			invalidatesTags: () => [{
				type: "Product",
			}]
		})
	})
});

export const {
	useGetProductsQuery,
	useCreateProductsMutation,
	useDeleteProductMutation
} = productsApi;