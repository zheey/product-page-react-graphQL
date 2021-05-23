import React, { Suspense, lazy } from "react";
import PageHeader from "../common/PageHeader";
const PageContent = lazy(() => import("../common/PageContent"));

const Products = () => {
  return (
    <div className="product-wrapper">
      <div className="content-wrapper">
        <PageHeader />
        <Suspense fallback={<div data-testid="loader">Loading...</div>}>
          <PageContent />
        </Suspense>
      </div>
    </div>
  );
};

export default Products;
