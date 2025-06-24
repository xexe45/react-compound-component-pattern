import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';



export const useShoppingCart = () => {

    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart  }>({});

    const onProductCountChange = ({ count, product }: { count:number, product: Product }) => {
      
        
        setShoppingCart( oldShoppingCart => {

            const oldProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };
            const newCount = oldProductInCart.count + count;
           
            if( Math.max(newCount, 0 ) > 0 ) {
                
                
                return {
                    ...oldShoppingCart,
                    [product.id]: { ...product, count: newCount }
                }
            }

            // Borrar el producto
            const { [product.id]: toDelete, ...rest  } = oldShoppingCart;
            return rest;


            // if( count === 0 ) {
                // const {  [product.id]: toDelete, ...rest  } = oldShoppingCart;
                // return rest;
            // }

            // return {
            //     ...oldShoppingCart,
            //     [ product.id ]: { ...product, count }
            // }
        })

    }

    return {
        shoppingCart,
        onProductCountChange,
    }

}