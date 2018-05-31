console.log('got to controller users.js');

var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  index: async (req,res,next) => {
        const users = await User.find({})
            .populate('_visits')
            .exec((err, users) => {
                if(err){
                    console.log('error happened', err);
                    next(err)
                } else {
                    console.log('found users:', users);
                    res.json({users:users});
                }
            })
},
  show: async (req, res, next) => {
      const userId = req.params.userId;
      console.log('req.params:', req.params);
      const user = await User.findById(userId)
        .populate('_visits')
        .exec((err, users) => {
            if(err){
                console.log('error happened', err);
                next(err)
            } else {
                console.log('found users:', users);
                res.status(200).json({users:users});
            }
        })
},
//updating user details for people coming in
  updateUser: (req, res, next) => {
    const userId = req.params.userId
    const email = req.body.email
    // if(!email) {
    //     res.status(500).json({message:'provide valid email'})
    // }
    console.log('userId handing: ', userId);
    console.log('form data to update: ', req.body)
    
    User.findOne({_id: userId}, (err,user) => {
        user.first_name = req.body.first_name,
        user.last_name = req.body.last_name,
        user.gender = req.body.gender,
        user.comment = req.body.comment,
        user.telephone = req.body.telephone,
        user.email = email,
        user.vip = req.body.vip,
        user.blacklist = req.body.blacklist,
        user.save( (err, result) => {
            if(err){
                console.log('error happened: ', err);
                for (field in err.errors) {
                    if(field == 'email'){
                        res.json({Fail: 'please provide valid email address', error: err})
                    }
                  }
                next(err)
            }else {
                console.log('Success updating user:', result);
                res.status(201).json({Success: 'Success updating user', user: user})
            }
        })
    })
},
// just setting VIP or Blacklist Status
  setUser:  (req, res, next) => {
    const userId = req.params.userId
    console.log('userId handing: ', userId);
    console.log('form data to update: ', req.body)
    User.findOne({_id: userId}, (err,user) => {
        user.vip = req.body.vip,
        user.blacklist = req.body.blacklist,
        user.save( (err, result) => {
            if(err){
                console.log('error happened: ', err);
                next(err)
            }else {
                console.log('Success updating user:', result);
                res.status(201).json({message: 'Success updating user', user: user})
            }
        })
    })
},
  

}
