import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const Add = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit=async(data)=>{
        await axios.post("http://localhost:3000/api/add",data)
        

    }
    return (
        <form  onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>amount</label>
                <input type="number" {...register("amount", { required: "enter amount" })}></input>
                {errors.amount && <p>{errors.amount.message}</p>}
            </div>

            <div>
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
            <div>
                <label>description</label>
                <input  {...register("description", { required: "enter description" })}></input>
                {errors.amount && <p>{errors.description.message}</p>}
            </div>
            <button>done</button>
        </form>
    );
};

export default Add;
