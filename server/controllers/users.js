console.log('got to controller users.js');

var mongoose = require('mongoose');
var User = mongoose.model('User');
// var multer = require('multer'),
//     storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null,'./uploads');
//     }, 
//     filename: function(req, file, cb){
//         cb(null, new Date().toISOString() + file.originalname);
//         }
//     }),
//     upload = multer({storage : storage});


module.exports = {
  index: async (req,res,next) => {
    try{
        const users = await User.find({});
        console.log('found users:', users);
        res.status(200).json(users);
    }catch(err) {
        console.log('error happened', err);
        next(err)
    }
},
  show: async (req, res, next) => {
      const userId = req.params.userId;
      console.log('req.params:', req.params);

      const user = await User.findById(userId);
      res.status(200).json(user);
},
  replaceUser: async(req, res, next) => {
    //enforce that req.body must contain all the fields
    const userId = req.params.userId;
    const newUser = req.body;
    console.log('userId is: ', userId);
    console.log('newUser is: ', newUser);
    const result = await User.findByIdAndUpdate(userId, newUser);
    console.log('result: ', result);
    res.status(200).json({success: true , result})
},
  updateUser: async(req, res, next) => {
    // req.body may contain any number of fields
    const userId = req.params.userId;
    const newUser = req.body;
    const result = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({success: true , result})
},
}
