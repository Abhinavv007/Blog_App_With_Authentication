import mongoose from "mongoose"
const authSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})
const authModel= mongoose.model("users",authSchema)
export default authModel  