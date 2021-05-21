import React from "react";
import PageHeader from "../common/PageHeader";
import PageContent from "../common/PageContent";

const Products = () => {
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;
    return(
        <div className="product-wrapper">
            <div className="content-wrapper">
                <PageHeader/>
                <PageContent/>
            </div>
        </div>
    )
};

export default Products;