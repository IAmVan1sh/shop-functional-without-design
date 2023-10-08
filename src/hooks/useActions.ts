import {useAppDispatch} from "../store/hooks.ts";
import {useMemo} from "react";
import {CartActions} from "../store/cart/Cart.slice.ts";
import {bindActionCreators} from "@reduxjs/toolkit";

const rootActions = {
	...CartActions
};

const useActions = () => {
	const dispatch = useAppDispatch();

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export default useActions;