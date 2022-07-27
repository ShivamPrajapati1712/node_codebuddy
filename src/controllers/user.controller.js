const User = require('../schema/user.schema');
const Post = require('../schema/post.schema')
const mongoose = require('mongoose')

module.exports.getUsersWithPostCount = async (req, res) => {
    try {
        //TODO: Implement this API
        //let data = await User.findOne({name:'Grayce'})
        let res1 = 0;
      let data =  mongoose.model('User').aggregate([
            {
                $lookup:{
                    "from": "Post",
                    "localField":"_id",
                    "foreignField":"userId",
                    "as":"Posts"
                }
            },
        ]).exec(function(err,result){
        })
       let userPaginated= await User.paginate({},{offset:5,limit:10}); // can be take dynamic from query param
        res.status(200).json({
            message: 'Implement this API',
            data: userPaginated
        })
    } catch (error) {
        res.send({error: error.message});
    }
}