import { createContext, useState } from "react";

// creamos el contexto
export const UserContext = createContext(null);

// Cremos el proveedor
export const MyProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   return (
      // le pasamos el valor al proveedor
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   );
};
