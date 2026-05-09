import express from "express"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/user.routes.js"
import accountRoutes from"./routes/account.route.js"


const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/users",userRoutes)
app.use("/api/accounts",accountRoutes)

app.get("/",(req,res)=>{
    res.send("server is running")
    console.log("server is running");
    
})




export default app;