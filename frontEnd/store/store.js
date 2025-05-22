import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../src/features/slices/expenseSlice";

const store=configureStore({
    reducer:{
        expense:expenseReducer

    }
})

export default store