const router = require('express').Router()

//컨트롤러
const product = require('../controller/product');

//로직구현은 컨트롤러를 거치지않고 바로 라우터에서 
router.get('/list' , (req,res) => {
    res.send('product_list');
})

router.get('/detail' , (req,res) => {
    res.send('detail_product');
})

//상품등록
//컨트롤러 사용 -> db랑 관련된 모든것들은 컨트롤러에서 
router.post('/add', product.add)

module.exports = router