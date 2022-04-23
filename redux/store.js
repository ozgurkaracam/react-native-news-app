import { configureStore } from '@reduxjs/toolkit'
import newReducer from "./newSlice";

export const store = configureStore({
    reducer: {
        news:newReducer
    },

})