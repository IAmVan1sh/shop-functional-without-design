import {useAppSelector} from "../store/hooks.ts";

export const useBasket = () => {
	return useAppSelector(state => state.cart.items);
};