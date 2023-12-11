const Review= require('../models/review');

exports.postReview=async(req, res)=>{
    //console.log(req.body);
    try{
        const companyName= req.body.companyName;
        const pros= req.body.pros;
        const cons= req.body.cons;
        const starRating= req.body.starRating;
console.log(companyName, pros, cons, starRating);
        const review= await Review.create({
            companyName, pros, cons, starRating
        })
        res.status(200).json({reviewDetail: review, "message":"review added"})

    }catch(err){
        console.log(err);
    }

}

exports.getReview= async(req, res)=>{
    const company= req.params.company;
    console.log("this is param",company)
try{
    const data= await Review.findAll({where: {companyName: company}});
    console.log("get data",data);
    res.status(200).json({reviewDetail: data, "message": "get company"});
}catch(err){
    console.log(err);
}
}