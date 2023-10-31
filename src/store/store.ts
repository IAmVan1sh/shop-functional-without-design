import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {CartReducer} from "./cart/Cart.slice.ts";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import {FetchCartReducer} from "./fetchCart/FetchCart.slice.ts";

const rootReducer = combineReducers({
	cart: CartReducer,
	fetchCart: FetchCartReducer,
});

const persistConfig = {
	key: "rtk-project",
	storage,
	whitelist: ["cart"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			}
		})
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;