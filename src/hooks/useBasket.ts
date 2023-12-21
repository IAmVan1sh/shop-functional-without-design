import {useAppSelector} from "./typedHooks.ts";

export const useBasket = () => {
	return useAppSelector(state => state.cart.items);
};