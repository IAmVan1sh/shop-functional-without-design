import {BASKET_ROUTE, MAIN_ROUTE} from "./consts.ts";
import Basket from "../pages/basket/Basket.tsx";
import {ReactNode} from "react";
import Main from "../pages/main/Main.tsx";

interface RouteType {
    path: string;
    element: ReactNode
}

const publicRoutes: RouteType[] = [
	{path: MAIN_ROUTE, element: <Main />},
	{path: BASKET_ROUTE, element: <Basket />},
];

export default publicRoutes;