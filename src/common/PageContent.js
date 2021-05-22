import React from "react";
import Product from "./Product";
import { useProduct } from "../context/ProductContext";

const PageContent = () => {
    const { productState } = useProduct();
    console.log(productState)
    const products = productState.products || [];
 return(
     <div className="product-content-wrapper">
         <div className="wrapper">
            <div className="product">
                {
                    products.map((product, index) => (
                        <Product product={product} key={index}/>
                    ))
                }
             </div>
         </div>
     </div>
 )
};

export default PageContent;