import {createAsyncThunk} from "@reduxjs/toolkit";
import {FetchCartItemType} from "../../types/FetchCartTypes.ts";

export const getCart = createAsyncThunk(
	"fetchedCart",
	async(link: string, thunkAPI) => {
		try {
			const response: FetchCartItemType[] = await fetch(link).then(response => response.json());
			return response;
		} catch(error) {
			thunkAPI.rejectWithValue(error);
		}
	});