import {api} from "./api.ts";
import ProductType, {CreateProductType} from "../../types/ProductTypes.ts";

export const productsApi = api.injectEndpoints({
	endpoints: build => ({
		getProductById: build.query<ProductType[], number>({
			query: id => `/${id}`,
		}),
		createProducts: build.mutation<ProductType, Partial<CreateProductType>>({
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