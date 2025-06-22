import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductTitle = ({title = ''}) => {
  const { product } = useContext(ProductContext);
  const showTitle = title ? title : product.title;
  return <span className={styles.productDescription}>{ showTitle }</span>;
};