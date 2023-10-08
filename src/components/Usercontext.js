import { createContext, useState } from "react";

export const mycontext = createContext();
export const Usercontext = ({ children }) => {
  const [user, setUser] = useState([]);
  return (
    <mycontext.Provider value={{ user, setUser }}>
      {children}
    </mycontext.Provider>
  );
};
