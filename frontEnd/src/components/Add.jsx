import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { addExpense } from "../features/slices/expenseSlice";
import { useDispatch } from "react-redux";

const Add = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch=useDispatch()
    const onSubmit=async(data)=>{
        dispatch(addExpense(data))
        await axios.post("http://localhost:3000/api/add",data)
        

    }
    return (
        <form className="bg-blue-500  text-white w-[50vw] flex flex-col font-bold p-4 m-10 rounded-2xl gap-6"  onSubmit={handleSubmit(onSubmit)}>
            <h1>ADD YOUR DAILY EXPENSES</h1>
            <div className="flex flex-col gap-4">
                <label>Amount</label>
                <input className="border rounded-2xl" type="number" bo {...register("amount", { required: "enter amount" })}></input>
                {errors.amount && <p>{errors.amount.message}</p>}
            </div>

            
            <div className="flex flex-col gap-4">
                <label>Description</label>
                <input className="border rounded-2xl" {...register("description", { required: "enter description" })}></input>
                {errors.amount && <p>{errors.description.message}</p>}
            </div>
            <div className="flex flex-col gap-4">
                <label>Category</label>
                <select {...register("category", { required: "select category" })} defaultValue={""}>
                    <option disabled value={""}>
                        Select
                    </option>
                    <option>food</option>
                    <option>petrol</option>
                    <option>other</option>
                </select>
                {errors.category && <p>{errors.category.message}</p>}
            </div>
            <button>Done</button>
        </form>
    );
};

export default Add;
