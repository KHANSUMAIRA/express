const express = require('express')
const router = express.Router()

const { getuserprofile, Login, signup, allUsers, getUserbyEmail,userbyEmail} = require('./controller')



router.get('/getuserprofile', getuserprofile)


router.post('/login', Login)
router.post('/signup', signup)
router.get('/getallusers', allUsers)
router.get('/userbyemail/:email', getUserbyEmail)
router.get('/getuserbyemail', userbyEmail)


module.exports = router