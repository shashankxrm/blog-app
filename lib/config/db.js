import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://laddu:laddu123@cluster0.mwm4ybk.mongodb.net/blog-app');
    console.log("DB Connected");
}