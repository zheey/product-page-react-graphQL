import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./stylesheet/main.scss";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ProductPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
