const { Schema,model} = require('mongoose')


const userSchema = new Schema({
    username:{
        type:String,
        required: true
        // unique : true
    }
,
password:{
        type: String,
        required : true,
        unique : true
    }
    ,
email:{
        type: String,
        required: true,
        unique : true
    },
    role: {
        type: String,
        required: true,
        default: "user"}
    ,
    joining: {
        type: Date,
        default: Date.now
    }
})
const user = model('user', userSchema)
module.exports = user