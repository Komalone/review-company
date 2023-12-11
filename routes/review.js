const express= require('express');
const path= require('path');
const bodyParser= require('body-parser');
const router= express.Router();
const ReviewController= require('../controller/review');


router.use(bodyParser.urlencoded({extended: false}));
router.get('/', (req, res)=>{
    //console.log(req.body);
    res.sendFile(path.join(__dirname, "..", "view", "review.html"));
});

router.post('/review', ReviewController.postReview)

router.get('/review/:company', ReviewController.getReview )
module.exports= router;