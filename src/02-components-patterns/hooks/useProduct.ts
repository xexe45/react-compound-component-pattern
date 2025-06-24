import { useEffect, useRef, useState } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}


export const useProduct = ({ onChange, product, value, initialValues }: useProductArgs) => {
    const initialValue = initialValues?.count || value || 0;
    const [ counter, setCounter ] = useState<number>(initialValue );
    const isMounted = useRef(false);
    const increaseBy = ( value: number ) => {
        /*
        if( isControlled.current ) {
            return onChange!({ count: value, product });
        }*/
        
        let newValue = Math.min(Math.max( counter + value, 0 ), initialValues?.maxCount || Infinity);
        
        setCounter( newValue );

        onChange && onChange({ count: newValue, product });
    }
    
    const reset = () => {
        setCounter(initialValues?.count || value || 0);
    }
    useEffect(() => {
        if(!isMounted.current) return;
        setCounter( value || initialValue);
    }, [ value ])

    useEffect(() => {
      isMounted.current = true;
    }, [])
    

    return {
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        reset
    }

}