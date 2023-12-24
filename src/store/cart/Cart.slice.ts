import {CaseReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartItemType, changeQuantityAction, InitialStateType} from "../../types/CartTypes.ts";

const initialState: InitialStateType = {
	items: [],
	isLoading: false,
	error: null,
};

const toggleCart: CaseReducer<InitialStateType, PayloadAction<CartItemType>> = (state, { payload: product }) => {
	const isExist = state.items.find(item => item.id === product.id);
	if (isExist) {
		state.items = state.items.filter(
			item => item !== isExist
		);
	} else {
		state.items.push(product);
	}
};

const changeQuantity: CaseReducer<InitialStateType, PayloadAction<changeQuantityAction>> = (state, { payload: { id, value }}) => {
	const item = state.items.find(item => item.id === id);
	if (item) {
		if (value >= 1 && value <= 99) {
			item.quantity = value;
		} else if (value > 99) {
			item.quantity = 99;
		} else {
			item.quantity = 1;
		}
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