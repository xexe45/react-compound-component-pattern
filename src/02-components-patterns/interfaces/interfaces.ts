import { JSX } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";
import { PropsButtons, PropsImg, PropsTitle } from "../components";

export interface Product {
  id: string;
  title: string;
  img?: string;
}



export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface  ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (Props: PropsTitle) => JSX.Element;
    Image: (Props: PropsImg) => JSX.Element;
    Buttons: ({className}: PropsButtons) => JSX.Element;
}