import { rootStore } from "../stores/root.store";

import { createContext } from "react";

export const StoreContext = createContext()
const {Provider} = StoreContext;


export  const StoreContextProvider  = ({children}) => {
return <Provider value={{...rootStore}}>{children}</Provider>
}