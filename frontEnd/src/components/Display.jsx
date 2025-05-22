import axios from "axios";
import React, { useEffect, useState } from "react";

const Display = () => {
    const [state, setState] = useState([]);
    const [category, setCategory] = useState("All");
    const [totalExpense, settotalExpense] = useState();

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
        settotalExpense(amount)
            setState(fetchData);
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
                {state.map((x, ind) => (
                    <div className="display" key={ind}>
                        <p>{x.amount}</p>
                        <p>{x.category}</p>
                        <p>{x.description}</p>
                    </div>
                ))}
                {console.log(state)}
            </div>
            <p>TotalAmount:{totalExpense}</p>
        </>
    );
};

export default Display;
