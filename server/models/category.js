import mongoose from "mongoose"
const categorySchema = new mongoose.Schema({
    title:String
})
const categoryModel= mongoose.model("category",categorySchema)
export default categoryModel