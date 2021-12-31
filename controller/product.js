const db = require('../config/db')


//db랑 관련된 모든 코딩을 컨트롤러에서 
exports.add = async(req,res) => {//promise는 옛날방식 async await 선호. 이유는 똑같은 비동기더라도 await 전까진 작동되지않아 오류가 발생할 확률이 적다.

    try {//오류가 있을경우 catch문으로 
        const body = req.body;
        const {name, description, price, seller, color1, colorName1, size1, quantity1, size1_2, quantity1_2, size1_3, quantity1_3, color2, colorName2, size2, quantity2, size2_2, quantity2_2, size2_3, quantity2_3, color3, colorName3, size3, quantity3, size3_2, quantity3_2, size3_3, quantity3_3, imageUrl, imageUrl2, imageUrl3, imageUrl4,imageUrl5, detailPage} = body;

        if(!name || !description || !price || !seller || !imageUrl){//방어코드 
            await db.Product.create({ //작업이 맨만지막에 실행되도록 기다린다. await!
                name,
                description,
                price,
                seller,
                color1,
                colorName1,
                size1,
                quantity1,
                size1_2,
                quantity1_2,
                size1_3,
                quantity1_3,
                color2,
                colorName2,
                size2,
                quantity2,
                size2_2,
                quantity2_2,
                size2_3,
                quantity2_3,
                color3,
                colorName3,
                size3,
                quantity3,
                size3_2,
                quantity3_2,
                size3_3,
                quantity3_3,
                imageUrl,
                imageUrl2,
                imageUrl3,
                imageUrl4,
                imageUrl5,
                detailPage,
            })

            //회사마다 다르지만 resultCode를 이용해서 어디까지 성공했는지 통신은 이루어지고 데이터는 받아오고 이런것들을 코드넘버를 통해 확인가능 

            //1>성공, -1: 실패 , 0:유저정보다름, 2:모든필드입력안함 alert 리액트쪽에서 
            res.status(400).json({"resultCode":1, "data": null })//
            res.status(400).json({"resultCode":1, "data":{ data }})

            res.status(400).send("모든필드를 입력해주세요");
        }
    } catch(error) {
        console.log(error);
        res.status(400).send("상품업로드에 문제가 발생하였습니다.")
        res.status(400).json({"resultCode":-1, "data": null})
    }
}