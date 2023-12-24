import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_URL} from "../../utils/consts.ts";
import ProductType from "../../types/ProductTypes.ts";

export const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	reducerPath: "api",
	tagTypes: ["Product"],
	endpoints: build => ({
		getProducts: build.query<ProductType[], void>({
			query: () => "/?_sort=id&_order=desc",
			providesTags: () => [{
				type: "Product",
			}]
		}),
	}),
});