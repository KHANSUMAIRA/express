const app = require('express')
const router = app.Router()

const { Signup,  Login ,allUsers , getUserbyEmail, userbyEmail} = require('./controller')



router.post('/signup', Signup)
router.post('/login', Login)
router.get('/getallusers', allUsers )
router.get('/userbyemail/:email',getUserbyEmail )
router.get('/getuserbyemail' , userbyEmail ) 





module.exports = router