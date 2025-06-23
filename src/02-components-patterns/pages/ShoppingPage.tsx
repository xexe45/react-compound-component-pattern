import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import '../styles/custom-styles.css';
const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "./coffee-mug.png",
};
export const ShoppingPage = () => {
  return (
    <div >
      <h1>Shopping Page</h1>
      <p>
        Welcome to the shopping page! Here you can find a variety of products to
        purchase.
      </p>
      <p>
        Explore our categories, add items to your cart, and proceed to checkout.
      </p>
      <p>Happy shopping!</p>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
       
       
        
         <ProductCard className="bg-dark text-white " product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        
        <ProductCard className="bg-dark text-white " product={product}>
          <ProductImage className="custom-image"  style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

          <ProductCard product={product} style={{backgroundColor: '#70D1F8'}}>
            <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
            <ProductTitle style={{fontWeight: '+'}} />
            <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
        </ProductCard>
      </div>
    </div>
  );
};
