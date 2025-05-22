import Expense from "../model/Expense.js"

export const addExpense=async(req,res)=>{
    try{
    console.log(req.body)
    const data=req.body
 const newData= await  Expense.create(data)
 res.json(newData)
    }catch(er){
        console.log(er)
    }

}
export const getExpense=async(req,res)=>{
    try{
         const data=await Expense.find()

    console.log(data)
    console.log("hello")
    res.json({data})

    }
    catch(er){
        console.log(er.message)
        res.json(er)
    }
   

}