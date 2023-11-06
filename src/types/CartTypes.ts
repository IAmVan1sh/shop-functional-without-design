import ProductType from "./ProductTypes.ts";

export interface CartItem {
    id: number;
    product: ProductType;
    quantity: number;
}

export interface CartAction extends Omit<CartItem, "id"> {
}

export interface changeQuantityAction {
    id: number;
    type: "minus" | "plus";
}

export interface InitialStateType {
    items: CartItem[];
}