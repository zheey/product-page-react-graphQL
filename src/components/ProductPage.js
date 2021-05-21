import React from "react";
import { useQuery } from '@apollo/client';
import Navbar from "./Navbar";
import Products from "./Products";
import { productService } from "../service/productService";
import { ProductProvider } from "../context/ProductContext";

const ProductPage = () => {
const { loading, error, data } = useQuery(productService.GET_PRODUCTS);
console.log(data);

 return (
    <div className="wrapper">
        <ProductProvider>
            <Navbar/>
            <Products/>
        </ProductProvider>
    </div>
 )
};

export default ProductPage;