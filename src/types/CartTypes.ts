import IProduct from "./ProductTypes.ts";

export interface ICartItem extends IProduct {
    quantity: number;
}

export interface IChangeQuantityAction {
    id: string;
    value: number;
}

export interface IInitialState {
    items: ICartItem[];
    error: string | null;
}