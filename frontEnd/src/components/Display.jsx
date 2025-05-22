import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExpense, settotalExpense } from "../features/slices/expenseSlice";

const Display = () => {
    const dispatch=useDispatch()
    // const [state, setState] = useState([]);
    const [category, setCategory] = useState("All");
   const data= useSelector(state=>state.expense.expense)
   const totalExpense= useSelector(state=>state.expense.totalExpense)
   console.log(data)

    useEffect(() => {
        let fetchData = [];
        const fetch = async () => {
            const resposne = await axios.get("http://localhost:3000/api/get");
            fetchData = resposne.data.data;
            console.log(fetchData);
            if (category !== "All") {
                fetchData = fetchData.filter((x) => x.category == category);
            }
          const amount= fetchData.reduce((acc,x)=>acc=acc+x.amount,0)
          dispatch(settotalExpense(amount))

          dispatch(setExpense(fetchData))
        // settotalExpense(amount)
            // setState(fetchData);
        };

        fetch();
        // setState(fetchData);
    }, [category]);
    //  useEffect(()=>{

    //     console.log(category)
    //     i

    // },[category])
    return (
        <>
         <p className="bg-amber-200 text-amber-900 font-semibold text-lg p-3 rounded mb-4 w-max">TotalAmount:{totalExpense}</p>
            <select
                value={category}
                onChange={(e) => {
                    setCategory(e.target.value);
                }}
            >
                <option value={""}>all</option>
                <option>food</option>
                <option>petrol</option>
                <option>other</option>
            </select>
            <div>
                 <div className="flex justify-evenly py-3 bg-blue-600 text-white font-bold rounded-t">
                     <p>Amount</p>
                            <p>Category</p>
                            <p>Description</p>
                 </div>
                {data?.map((x, ind) => (
                    <div className=" flex gap-10 y py-3  hover:bg-blue-100 justify-evenly  text-center bg-gray-50" key={ind}>
                        <p className=" text-left">{x.amount}</p>
                        <p className=" text-justify">{x.category}</p>
                        <p className=" text-justify">{x.description}</p>
                    </div>
                ))}
                {/* {console.log(state)} */}
            </div>
           
        </>
    );
};

export default Display;
