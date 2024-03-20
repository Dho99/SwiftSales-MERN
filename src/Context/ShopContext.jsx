import React, { createContext, useState } from "react";
import allProducts from "../assets/Dummy/allProduct";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < allProducts.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems ,setCartItems] = useState(getDefaultCart());
    const contextValue = {allProducts, cartItems};

    const addToCart = (itemid) => {
        setCartItems((prev) => ({...prev, [itemid]:prev[itemid]+1}))
    }



    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;