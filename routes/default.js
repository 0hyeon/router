const router = require('express').Router()

router.get('/default' , (req,res) => {
    res.send('hello');
})

module.exports = router