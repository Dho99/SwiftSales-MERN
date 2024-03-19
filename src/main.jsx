import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootswatch/dist/zephyr/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ShopContextProvider from "./Context/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);
