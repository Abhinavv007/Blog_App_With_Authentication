import express from "express"
import connectToMongo from "./config/db.js"
import cors from "cors"
import userRouter from"./routes/blog.js"

connectToMongo()
const app = express()

app.use(express.static("uploads"))


app.use(express.json())
app.use(cors())

app.use("/api/v1",userRouter)

app.get("/",(req,resp)=>{
    resp.send("hello from server")
  
})


app.listen(9000,()=>{
    console.log("Server started")
})