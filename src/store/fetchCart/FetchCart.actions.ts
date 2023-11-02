import {createAsyncThunk} from "@reduxjs/toolkit";
import {FetchCartItemType} from "../../types/FetchCartTypes.ts";

export const getCart = createAsyncThunk(
	"fetchedCart",
	async(link: string, thunkAPI) => {
		try {

			// My first solution
			//			const response: FetchCartItemType[] = await fetch(link)
			//				.then((response): Promise<JSON> => response.json())
			//				.then(json => JSON.parse(JSON.stringify(json)))
			//				.then(object => {
			//					if (Object.prototype.hasOwnProperty.call(object, "products"))
			//						return object.products;
			//				});

			// My solution with some of GPT's help:
			//			const response = await fetch(link).then(response => response.json());

			// My latest solution
			return await fetch(link)
				.then(response => response.json())
				.then((json): FetchCartItemType[] => json.products);

		} catch(error) {
			thunkAPI.rejectWithValue(error);
		}
	});