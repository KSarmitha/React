import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cartState: cartSlice
    }
})

export default appStore;