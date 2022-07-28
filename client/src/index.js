import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SellerState, UserState, ProductState } from "./Contexts";
import { BrowserRouter } from "react-router-dom";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
const app = (
  <React.StrictMode>
    <SellerState>
      <UserState>
        <ProductState>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProductState>
      </UserState>
    </SellerState>
  </React.StrictMode>
);
root.render(app);
