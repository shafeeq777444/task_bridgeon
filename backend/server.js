import express from 'express'
import connectDb from './config/db.js'
import expenseRoutes from './routes/expenseRoutes.js'
import cors from 'cors'
const app=express()

connectDb()

app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json())

app.use("/api",expenseRoutes)

app.listen(3000,()=>{
    console.log("its working on 3000")
})