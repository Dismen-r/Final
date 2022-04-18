import React from "react";
import Pro from "./Home";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
function Provider(){
    return(
        <CartProvider>
            <Pro></Pro>
            <Cart></Cart>
      </CartProvider>
    )
}

export default Provider;
