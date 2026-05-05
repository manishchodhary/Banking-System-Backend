import express from "express"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/user.routes.js"
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("user",userRoutes)

app.get("/",(req,res)=>{
    res.send("server is running")
    console.log("server is running");
    
})




export default app;