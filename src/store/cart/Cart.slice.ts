import {CaseReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartItem, IChangeQuantityAction, IInitialState} from "../../types/CartTypes.ts";

const initialState: IInitialState = {
	items: [],
	error: null,
};

const toggleCart: CaseReducer<IInitialState, PayloadAction<ICartItem>> = (state, { payload: product }) => {
	const isExist = state.items.find(item => item._id === product._id);
	if (isExist) {
		state.items = state.items.filter(
			item => item !== isExist
		);
	} else {
		state.items.push(product);
	}
};

const changeQuantity: CaseReducer<IInitialState, PayloadAction<IChangeQuantityAction>> = (state, { payload: { id, value }}) => {
	const item = state.items.find(item => item._id === id);
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