import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {CartReducer} from "./cart/Cart.slice.ts";

const reducers = combineReducers({
	cart: CartReducer,
});

const store = configureStore({
	reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;