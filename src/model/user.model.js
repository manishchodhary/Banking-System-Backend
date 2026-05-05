import mongoose from "mongoose";
import bcrypt from "bcrypt"


const userSchmea = new mongoose.Schema({
    email:{
        type:String,
        unique:[true,"Email already exists"],
        trim:true,
        lowercase:true,
        required:[true,"Email is required for creating a user"],
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Invalid email address"]

    },
    name:{
        type:String,
        required:[true,"Name is required for creating an account"]
    },
    password:{
        type:String,
        required:[true,"password is required for creating an account"],
        minlength:[6,"password should contain more than 6 chatacter"],
        select:false
    }
},{timestamps:true})

userSchmea.pre("save",async function() {
    if(!this.isModified("password")){
        return
    }

    const hash = bcrypt.hash(this.password,10)
    this.password = hash
    return
    
})

userSchmea.method.comparePassword = async function (password) {
    console.log(password,this.password);

    return await bcrypt.compare(password, this.password)
    
}

const userModel = mongoose.model("User",userSchmea)

export default userModel;