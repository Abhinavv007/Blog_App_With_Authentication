import mongoose from "mongoose"
const connectToMongo=async()=>{
    const res =await mongoose.connect("mongodb://127.0.0.1:27017/blog-mern")
    if(res) {
        console.log("Database Connected Successfully!!")
    }
}
export default connectToMongo