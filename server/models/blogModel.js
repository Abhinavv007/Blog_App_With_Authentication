import mongoose from "mongoose"
const blogSchema = new mongoose.Schema({
    title:String,
    category:String,
    description:String,
    thumbnail:String,
    user:mongoose.Schema.Types.ObjectId 
})
const blogModel= mongoose.model("blogs",blogSchema)
export default blogModel