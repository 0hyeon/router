const router = require('express').Router()

const test = require('./default')
const user = require('./user')
const product = require('./product')
router.use('/test', test)
router.use('/user', user)
router.use('/product', product)

module.exports = router