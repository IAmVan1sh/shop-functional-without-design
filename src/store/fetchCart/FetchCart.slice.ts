import {createSlice} from "@reduxjs/toolkit";
import {getCart} from "./FetchCart.actions.ts";
import {FetchInitialStateType} from "../../types/FetchCartTypes.ts";

const initialState: FetchInitialStateType = {
	items: [],
	isLoading: false,
	error: null
};

export const FetchCartSlice = createSlice({
	name: "fetchCart",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getCart.pending, state => {
				state.isLoading = true;
			})
			.addCase(getCart.fulfilled, (state, action) => {
				state.isLoading = false;
				console.log(action.payload);

				if (action.payload !== undefined) {
					state.items = action.payload;
				} else {
					state.items = [];
				}
			})

			// : PayloadAction<, string, ({arg: string, requestId: string, requestStatus: "rejected", aborted: boolean, condition: boolean} & {rejectedWithValue: true}) | ({arg: string,requestId: string, requestStatus: "rejected", aborted: boolean, condition: boolean} & {rejectedWithValue: false}), SerializedError>
			.addCase(getCart.rejected, (state, {error}) => {
				state.isLoading = false;
				state.error = String(error);
				state.items = [];
			});
	}
});

export const { reducer: FetchCartReducer } = FetchCartSlice;