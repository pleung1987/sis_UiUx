console.log('got to controller visits.js');

var mongoose = require('mongoose');
var User = mongoose.model('User');
var Visit = mongoose.model('Visit')

multer = require('multer'),
storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'./uploads');
    }, 
    filename: function(req, file, cb){
        cb(null, new Date().toISOString() + file.originalname);
    }
}),
fileFilter = (req, file, cb) => {
    //reject file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    } else {
        cb(null, false);
    }
},
upload = multer({
    storage : storage, 
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

// (upload.single('image') : middleware for multer upload

module.exports = {
    getVisitor:  function(req,res) {
       Visit.find({}, function(err,results){
        if(err){
            res.json({message: "Error happened", error: err});
        } else {
            res.json({message:"Success", result: results});
         }
       })
    },
    
    create:  function(req,res, next) {
        // console.log('req.file:', req.file)
        const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            byte_stream: req.body.byte_stream,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gender: req.body.gender,
            comment: req.body.comment,
            // image: req.file.path,
            telephone: req.body.telephone,
            email: req.body.email
        })
        const newVisit = new Visit({
            _id: new mongoose.Types.ObjectId(),
            _visitor: newUser._id,
            visited: new Date()
        });
       
        User.findOne({byte_stream: newUser.byte_stream}, (err,user) => {
            // console.log('finding existing user = ', user);
            if(err){
                console.log('no existing user error: ', err)
                res.json({message:"Error finding user", error: err})
            } else {
                //handling new User
                if(user === null){
                    console.log('found no existing users....');
                    User.create({_id:newUser._id, byte_stream: newUser.byte_stream, _visits: newVisit._id}, (err, result) => {
                        if(err){ 
                            console.log('error creating new user: ', err);
                            res.json({message:"error creating new User", error: err})
                        } else{
                            console.log('Successfully created User : ', result);
                            Visit.create({_id:newVisit._id, _visitor:newUser._id, visited:newVisit.visited}, (err,result) =>{
                                if(err){
                                    console.log('error creating new visit: ', err);
                                    res.json({message:"error creating new visit", error: err})
                                } else{
                                    console.log('Successfully created visit: ', result);
                                    res.json({message:"Successfully created new visit: ", result})
                                }
                            })
                        }
                    })
                 
                }else{
                    console.log('this is the new Visit pushing in to existing User: ', newVisit);
                    

                    res.json({message:"Successfully added new visit to exisiting user: ", user})
                }
            }
        })

        // newUser.save()
        //         .then(user => {
        //             console.log('Success creating user:', user);
        //             res.status(201).json({
        //                 message: 'Success creating user',
        //                 user: user
        //             })
        //         })
        //         .catch(err =>{
        //             console.log('error happened', err);
        //             next(err)
        //         })
        // newVisit
        //         .save()
        //         .then(visit => {
        //             console.log('Success creating visit:', visit);
        //             res.status(201).json({
        //                 message: 'Success creating visit',
        //                 visit: visit
        //             })
        //         })
        //         .catch(err =>{
        //             console.log('error happened', err);
        //             next(err)
        //         })
        //         newUser._visits.push(newVisit)
        
    },
}
