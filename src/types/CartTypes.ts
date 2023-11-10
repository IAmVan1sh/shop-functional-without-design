import ProductType from "./ProductTypes.ts";

export interface CartAction extends Omit<ProductType, "id"> {}

export interface CartItemType extends ProductType {
    quantity: number;
}

export interface changeQuantityAction {
    id: number;
    type: "minus" | "plus";
}

export interface InitialStateType {
    items: CartItemType[];
    isLoading: boolean;
    error: string | null;
}