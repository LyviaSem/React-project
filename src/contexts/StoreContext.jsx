import { createContext, useState } from "react";

export const StoreContext = createContext();
const { Provider } = StoreContext;


export const StoreContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    return <Provider value={{ cart, setCart }}>{children}</Provider>
}