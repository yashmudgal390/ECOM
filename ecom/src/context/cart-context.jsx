import { useContext, createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
const CartContext = createContext();

const CartProvider=({ children }) => {
    const initialState={
        cart:[],
        fav:[],
    }
    const [{cart,fav}, cartDispatch] = useReducer(cartReducer,initialState);
    return (<CartContext.Provider value={{cart,fav,cartDispatch}}>
        {children}
    </CartContext.Provider>
    )
}
const useCart=()=>useContext(CartContext);
export {CartProvider,useCart};