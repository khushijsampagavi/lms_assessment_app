import { createContext, useContext } from "react";

const LoginContext = createContext();

const useLoginType = () => useContext(LoginContext);

export {LoginContext, useLoginType}