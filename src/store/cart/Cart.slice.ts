import {CaseReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartAction, InitialStateType} from "../../types/CartTypes.ts";

const initialState: InitialStateType = {
	items: []
};

const toggleCart: CaseReducer<InitialStateType, PayloadAction<CartAction>> = (state, {payload: item}) => {
	const isExistIndex = state.items.findIndex(c => c.id === item.product.id);

	if (isExistIndex !== -1) {
		state.items.splice(isExistIndex, 1);
	} else {
		state.items.push({ ...item, id: item.product.id });
	}
};

const changeQuantity: CaseReducer<InitialStateType, PayloadAction<CartAction>> = (state, {payload: item}) => {
	const isExistIndex = state.items.findIndex(c => c.id === item.product.id);

	if (isExistIndex !== -1) {
		state.items[isExistIndex].quantity += item.quantity;
	}
};

const CartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		toggleCart,
		changeQuantity,
	}
});

export const { actions: CartActions, reducer: CartReducer } = CartSlice;