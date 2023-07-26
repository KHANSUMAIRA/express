const express = require('express')
const app = express()



require('dotenv').config()

const mongoose = require('mongoose')
const port  = process.env.SERVER_PORT || 1002

// const port = 3000


app.use(express.json())
app.use('/api', require('./api/user/router'))



// mongoose.connect(process.env.MONGO_URL).then(()=>
// console.log("DB Connected"))
// .catch((Error) => console.log("Something went wrong"))




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})