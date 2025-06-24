import { JSX } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as PropsButtons, PropsImg, PropsTitle } from "../components";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductInCart extends Product {
  count: number;
}


export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface InitialValues{
  count? : number;
  maxCount?: number;
}
export interface  ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (Props: PropsTitle) => JSX.Element;
    Image: (Props: PropsImg) => JSX.Element;
    Buttons: ({className}: PropsButtons) => JSX.Element;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}