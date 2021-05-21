import React from "react";

const PageHeader = () => {
  return (
    <div className="product-header-wrapper">
      <div className="content">
        <div className="header">
          <h1>All Products</h1>
          <p>A 360° look at Lumin</p>
        </div>
        <div className="input-wrapper">
            <div className="wrapper">
                <select>
                    <option className="disabled" disabled>Filter By</option>
                    <option>All Products</option>
                    <option>New Products</option>
                    <option>Sets</option>
                    <option>Skincare</option>
                    <option>Hair and Body Care</option>
                    <option>Accessories</option>
                </select>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
