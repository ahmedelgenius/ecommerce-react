// import axios from "axios";
// import { useContext, useEffect, useReducer } from "react";
// import { createContext } from "react";

// const AppContext = createContext();
// const API = `https://api.pujakaitem.com/api/products`;
// const initialState = {
//   isLoading: false,
//   isError: false,
//   products: [],
//   featureProducts: [],
// };
// const AppProvider = ({ children }) => {
//   // const [state, dispatch] = useReducer(reducer, initialState);
//   const getProducts = async (url) => {
//     const res = await axios.get(url);
//     const products = await res.data;
//   };
//   useEffect(() => {
//     getProducts(API);
//   }, []);

//   return (
//     <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
//   );
// };
// const useProductContext = () => {
//   return useContext(AppContext);
// };

// export { AppProvider, AppContext, useProductContext };
