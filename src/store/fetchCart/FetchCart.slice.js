import {createSlice} from "@reduxjs/toolkit";
import {getCart} from "./FetchCart.actions.ts";

// : FetchInitialStateType
const initialState = {
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
				state.items = action.payload;
			})
			.addCase(getCart.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload.error;
				state.items = [];
			});
	}
});

export const { actions: FetchCartActions, reducer: FetchCartReducer } = FetchCartSlice;