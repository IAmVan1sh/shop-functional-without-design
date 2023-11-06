import {CaseReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartItem, changeQuantityAction, InitialStateType} from "../../types/CartTypes.ts";

const initialState: InitialStateType = {
	items: []
};

const toggleCart: CaseReducer<InitialStateType, PayloadAction<CartItem>> = (state, { payload: product }) => {
	const isExist = state.items.find(item => item.product.id === product.product.id);
	if (isExist) {
		state.items = state.items.filter(
			item => item !== isExist
		);
	} else {
		state.items.push(product);
	}
};

const changeQuantity: CaseReducer<InitialStateType, PayloadAction<changeQuantityAction>> = (state, { payload: { id, type }}) => {
	const item = state.items.find(item => item.product.id === id);
	if (item) type === "plus" ? item.quantity++ : item.quantity--;
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