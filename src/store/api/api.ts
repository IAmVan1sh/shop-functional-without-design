import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_URL} from "../../utils/consts.ts";

export const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	reducerPath: "api",
	tagTypes: ["product"],
	endpoints: build => ({
		start: build.query({
			query: () => (""),
		})
	}),
});