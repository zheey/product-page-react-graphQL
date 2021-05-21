import React from "react";
import Product from "./Product";

const PageContent = () => {
 return(
     <div className="product-content-wrapper">
         <div className="wrapper">
            <div className="product">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
             </div>
         </div>
     </div>
 )
};

export default PageContent;