import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_URL} from "../../utils/consts.ts";
import ProductType from "../../types/ProductTypes.ts";

export const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: headers => headers,
		credentials: "include",
	}),
	reducerPath: "api",
	tagTypes: ["Product"],
	endpoints: build => ({
		getProducts: build.query<ProductType[], void>({
			query: () => "product/get-products",
			providesTags: () => [{
				type: "Product",
			}]
		}),
	}),
});
