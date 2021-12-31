const express = require('express')
const app = express()
const Router = require('./routes/index');


//라우터
app.use('/v1', Router)//버전


app.listen(3000, () => {
    console.log('3000PORT CONNETCED!!')
})