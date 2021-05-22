import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./stylesheet/main.scss";
import ProductPage from "./components/ProductPage";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Switch>
          <Route path="/" component={ProductPage}/>
        </Switch>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
