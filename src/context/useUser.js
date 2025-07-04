import { createContext, useContext } from "react";

const UserContext = createContext();

// Create a custom hook for easy access to the UserContext
const useUser = () => useContext(UserContext);

export {UserContext, useUser};