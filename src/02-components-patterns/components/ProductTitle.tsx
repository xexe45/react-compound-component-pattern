import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
export interface PropsTitle {
  title?: string;
  className?: string
  style?: React.CSSProperties;
}

export const ProductTitle = ({title = '', className, style}: PropsTitle) => {
  const { product } = useContext(ProductContext);
  const showTitle = title ? title : product.title;
  return <span style={style} className={`${ styles.productDescription } ${className} `}>{ showTitle }</span>;
};