import mongoose from "mongoose";


export const connectDB= async ()=>{
  await mongoose.connect('mongodb+srv://subhamondal971:9231949908@subha.lyz5ycs.mongodb.net/foodapp-college').then(()=>console.log("DB Connected"))
}