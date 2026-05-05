import app from "./src/app.js";
import {config} from "dotenv"
import connectDb from "./src/config/db.js";

const PORT = process.env.PORT
config()


connectDb()
app.listen(PORT, ()=>{
    console.log("server is runing on PORT",PORT);
    
})