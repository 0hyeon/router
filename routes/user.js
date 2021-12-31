const router = require('express').Router()
//컨트롤러
const user = require('../controller/login')

router.get('/login', user.login)

router.get('/register' ,user.register)

module.exports = router