import { addExpense, getExpense } from "../controllers/expenseController.js"
import express from "express"

const route=express.Router()

route.post("/add",addExpense)
route.get("/get",getExpense)

export default route