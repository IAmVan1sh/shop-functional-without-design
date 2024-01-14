import ProductType from "./ProductTypes.ts";

export interface CartItemType extends ProductType {
    quantity: number;
}

export interface changeQuantityAction {
    id: string;
    value: number;
}

export interface InitialStateType {
    items: CartItemType[];
    error: string | null;
}