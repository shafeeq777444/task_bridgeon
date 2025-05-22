import mongoose from 'mongoose'

const ExpenseSchema=mongoose.Schema({
    amount:Number,
    category:String,
    description:String
})

export default mongoose.model("Expense",ExpenseSchema)