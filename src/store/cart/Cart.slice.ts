import {CaseReducer, createSlice} from "@reduxjs/toolkit";
import CartItem from "../../types/CartTypes.ts";

interface InitialStateType {
	items: CartItem;
}

const initialState: InitialStateType[] = [];

interface CartAction {
    type: string;
    payload: CartItem;
}

const toggleCart: CaseReducer<InitialStateType[], CartAction> = (state, {payload: item}) => {
	const isExist = state.some(c => c.items.id === item.id);

	if (isExist) {
		const index = state.findIndex(c => c.items.id === item.id);
		if (index != -1) {
			state.splice(index, 1);
		}
	} else {
		state.push({items: item});
	}
};

const changeQuantity: CaseReducer<InitialStateType[], CartAction> = (state, {payload: item}) => {
	const isExistIndex = state.findIndex(c => c.items.id === item.id);

	if (isExistIndex !== -1) {
		state[isExistIndex].items.quantity += item.quantity;
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