const { Schema,model} = require("mongoose")


const userSchema = new Schema({
    username:{
        type:String,
        required: true
        // unique : true
    }
,
passward:{
        type: String,
        required : true
        // unique : true
    }
    ,
email:{
        type: String,
        required: true
        // unique : true
    }
//    role :{
//         type: Boolean,
//         required: true
//         default:"user"
//     }
    ,
    joining:{
       type: Data,
       default:Data.now
    }
})
const user = model('user', userSchema)
module.exports = user