import mongoose from "mongoose";

const connectDb=()=>mongoose.connect("mongodb://localhost:27017/bridgeon").then(()=>{
    console.log("monggose is connected")
})

export default connectDb