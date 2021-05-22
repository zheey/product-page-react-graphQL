import React, { useEffect } from "react";
import { useQuery } from '@apollo/client';
import Navbar from "./Navbar";
import Products from "./Products";
import { productService } from "../service/productService";
import { useProduct } from "../context/ProductContext";
import { ProductConstants } from "../constant/productConstants";
import Cart from "./Cart";

const ProductPage = () => {
const { loading, error, data } = useQuery(productService.GET_PRODUCTS);
const { dispatchProductActions, productState } = useProduct();
console.log(data);

useEffect(() => {
    dispatchProductActions({
        type: ProductConstants.SET_PRODUCTS,
        payload: { products: data ? data.products : [] }
    });
}, [dispatchProductActions, data])
 return (
    <div className="wrapper">
        <Navbar/>
        <Products/>
        {
            productState.showCart ?
                <Cart/>
                :
                null
        }
    </div>
 )
};

export default ProductPage;