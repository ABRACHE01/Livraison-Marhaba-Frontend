import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../features/auth/redux/authSlice";

import menuReducer from "../features/menu/redux/menuSlice";
import { menuApiSlice } from "../features/menu/redux/menuApiSlice";
 import { productsApi } from '../features/products/redux/productsAPI.js'; 
import  cartReducer  from "../features/products/redux/cartSlice.js";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    cart: cartReducer,
    menu: menuReducer,
    [menuApiSlice.reducerPath]: menuApiSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(menuApiSlice.middleware)
      .concat(apiSlice.middleware, productsApi.middleware),
  devTools: true,
});





export default store;

