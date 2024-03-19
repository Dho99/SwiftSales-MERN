import React, { createContext } from "react";
import allProducts from "../assets/Dummy/allProduct";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    
    const contextValue = {allProducts};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;