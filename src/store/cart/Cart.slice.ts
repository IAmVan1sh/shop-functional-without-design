import {CaseReducer, createSlice} from "@reduxjs/toolkit";
import {CardInstance} from "../../types/CardType.ts";

type InitialStateType = CardInstance[];

const initialState: InitialStateType = [];

interface CartAction {
    type: string;
    payload: CardInstance;
}

const toggleCart: CaseReducer<CardInstance[], CartAction> = (state, {payload: card}) => {
	const isExists = state.some(c => c.id === card.id);

	if (isExists) {
		const index = state.findIndex(c => c.id === card.id);
		if (index != -1) {
			state.splice(index, 1);
		}
	} else {
		state.push(card);
	}
};

const CartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		toggleCart,
	}
});

export const { actions: CartActions, reducer: CartReducer } = CartSlice;