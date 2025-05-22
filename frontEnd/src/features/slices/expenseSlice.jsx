import { createSlice } from "@reduxjs/toolkit";

const expenseSlice=createSlice({
    initialState:{
        expense:[],
        totalExpense:0
    },
    name:'expense',
    reducers:{
        setExpense:(state,action)=>{state.expense=action.payload},
        settotalExpense:(state,action)=>{state.totalExpense=action.payload},
        addExpense:(state,action)=>{state.expense.push(action.payload)},
    }
})

export default expenseSlice.reducer
export const {setExpense,settotalExpense,addExpense}=expenseSlice.actions