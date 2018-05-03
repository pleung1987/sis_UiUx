console.log('got to controller visits.js');

var mongoose = require('mongoose');
var User = mongoose.model('User');
var Visit = mongoose.model('Visit');
var Camera = mongoose.model('Camera');
var fs = require('fs');

//Multer for Client Image/file upload:
// const multer = require('multer') 
// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null,'./uploads');
//     }, 
//     filename: function(req, file, cb){
//         const ext = file.mimetype.split('/')[1];
//         cb(null, new Date().toISOString() + '.' + ext);
//     }
// }) 
// const fileFilter = (req, file, cb) => {
//     //reject file
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// } 
// const upload = multer({
//     storage : storage
// }).single('faceImage');


module.exports = {
    getVisitor:  function(req,res) {
    Visit.find({})
    .populate('_visitor _camera')
    .exec( function(err,results){
        if(err){
            res.json({message: "Error happened", error: err});
        } else {
            res.json({message:"Success", data: results});
         }
       })
    },
    show: function(req, res){
        console.log('Visit Id retrieved: ', req.params.id);
        Visit.findOne({_id: req.params.id})
        .populate('_visitor _camera')
        .exec( function(err, result) {
            if(err){
                res.json({message: "Error happened", error: err});
            } else {
                console.log("single Visit retrieved:", result);
                res.json({message:"Success", data: result}); 
            }
        })
    },
    create:  function(req,res) {
        var image = req.body.faceImage;
        var bitmap = Buffer.from(image, 'base64')
        var path = `uploads/${new Date().toISOString()}-face.jpg`
        fs.writeFileSync(path, bitmap,{ encoding:'base64'})
        console.log('this is the path: ', path)

        const newCamera = new Camera({
            _id: new mongoose.Types.ObjectId(),
            mac_addr: req.body.mac_addr
        }, {usePushEach: true})
  
        const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            byte_stream: req.body.byte_stream,
            faceImage: path,
        }, {usePushEach: true})
        
        const newVisit = new Visit({
            _id: new mongoose.Types.ObjectId(),
            _visitor: newUser._id,
            _camera: newCamera._id,
            visited: new Date()
        }, {usePushEach: true});

        //validate Camera before creating or updating
        Camera.findOne({mac_addr: newCamera.mac_addr}, (err,camera) => {
            console.log('finding if camera exist = ', camera);
            if(err){
                console.log('no existing camera error: ', err)
                res.json({message:"Error finding camera", error: err})
            } else {
                if(camera === null){
                    console.log('found no existing camera....');
                    //create new Camera (event 2)
                    Camera.create({_id:newCamera._id, mac_addr: newCamera.mac_addr, _visits: newVisit._id}, (err, CamResult) => {
                        if(err){ 
                            console.log('error creating new camera: ', err);
                            res.json({message:"error creating new Camera", error: err})
                        } else{
                            console.log('Successfully created new Camera : ', CamResult);
                            //check if User Exist:
                            User.findOne({byte_stream: newUser.byte_stream}, (err,user) => {
                                if(err){
                                    console.log('no existing user error: ', err)
                                    res.json({message:"Error finding user", error: err})
                                } else {
                                    if(user === null){
                                        console.log('found no existing users....');
                                        //creating new User (event 6):
                                        User.create({_id:newUser._id, byte_stream: newUser.byte_stream, faceImage: newUser.faceImage, _visits: newVisit._id}, (err, UserResult) => {
                                            if(err){ 
                                                console.log('error creating new user: ', err);
                                                res.json({message:"error creating new User", error: err})
                                            }else{
                                                console.log('Successfully created new User : ', UserResult);
                                                //creating new Visit for new user new camera (event 10)
                                                Visit.create({_id:newVisit._id, _visitor:newUser._id, _camera:newCamera._id, visited:newVisit.visited}, (err,VisitResult) =>{
                                                    if(err){
                                                        console.log('error creating new visit: ', err);
                                                        res.json({message:"error creating new visit", error: err})
                                                    } else{
                                                        console.log('Successfully created new visit: ', VisitResult);
                                                        res.json({message:"Successfully created New Camera, New User, New Visit", camera: CamResult, user: UserResult, visit: VisitResult})
                                                    }
                                                })
                                            }
                                        })
                                    }else{
                                        //handing existing user (event 5)
                                        user._visits.push(newVisit._id)
                                        user.faceImage.push(newUser.faceImage)
                                        user.save(function(err, pushVisit){
                                            if(err){
                                                console.log('error pushing visit: ', err);
                                                res.json({message: "Error happened", error: err});
                                            }else{
                                                console.log('Successfully pushing Visit for User : ', pushVisit);
                                                // // Create new Visit for old user new camera (event 9)
                                                Visit.create({_id:newVisit._id, _visitor: user._id, _camera: newCamera._id, visited:newVisit.visited}, (err,VisitResult) => {
                                                    if(err){
                                                        console.log('error creating new visit: ', err);
                                                        res.json({message:"error creating new Visit", error: err})
                                                    } else{
                                                        console.log('Successfully created new Visit: ', VisitResult);
                                                        res.json({message:"Successfully created New Camera, update old User, created New Visit", camera: CamResult, user: pushVisit, visit: VisitResult})
                                                    }
                                                })
                                            }
                                        })
                                    }
                                }
                            })

                        }
                    })
                }else{
                //updating from existing camera
                    console.log('pushing newVisit._Id into _visit: ', newVisit._id);
                    // updating old camera (event 1):
                    camera._visits.push(newVisit._id)
                    camera.save(function(err, pushCamVisit){
                        if(err){
                            console.log('error pushing visit: ', err);
                            res.json({message:"error creating new Camera through push", error: err})
                        }else{
                            console.log('Successfully saving camera with newVisit._id pushed: ', pushCamVisit);
                            //check if User exist:
                            User.findOne({byte_stream: newUser.byte_stream}, (err,user) => {
                                if(err){
                                    console.log('no existing user error: ', err)
                                    res.json({message:"Error finding user", error: err})
                                } else {
                                    if(user === null){
                                        console.log('found no existing users....');
                                        //creating new User (event 4):
                                        User.create({_id:newUser._id, byte_stream: newUser.byte_stream, faceImage: newUser.faceImage, _visits: newVisit._id}, (err, UserResult) => {
                                            if(err){ 
                                                console.log('error creating new user: ', err);
                                                res.json({message:"error creating new User", error: err})
                                            }else{
                                                console.log('Successfully created User : ', UserResult);
                                                //creating new Visit for old camera new user (event 7)
                                                Visit.create({_id:newVisit._id, _visitor:newUser._id, _camera:camera._id, visited:newVisit.visited}, (err,VisitResult) =>{
                                                    if(err){
                                                        console.log('error creating new visit: ', err);
                                                        res.json({message:"error creating new visit", error: err})
                                                    } else{
                                                        console.log('Successfully created new visit: ', VisitResult);
                                                        res.json({message:"Successfully updated old Camera, created new User, created New Visit", camera: pushCamVisit, user: UserResult, visit: VisitResult})
                                                    }
                                                })
                                            }
                                        })
                                    }else{
                                        //handing existing user (event 5)
                                        user._visits.push(newVisit._id)
                                        user.faceImage.push(newUser.faceImage)
                                        user.save(function(err, pushUserVisit){
                                            if(err){
                                                console.log('error pushing visit: ', err);
                                                res.json({message: "Error happened", error: err});
                                            }else{
                                                console.log('Successfully pushing Visit for User : ', pushUserVisit);
                                                // // Create new Visit for old user old camera (event 7)
                                                Visit.create({_id:newVisit._id, _visitor: user._id, _camera: camera._id, visited:newVisit.visited}, (err,VisitResult) => {
                                                    if(err){
                                                        console.log('error creating new visit: ', err);
                                                        res.json({message:"error creating new Visit", error: err})
                                                    } else{
                                                        console.log('Successfully created new Visit: ', VisitResult);
                                                        res.json({message:"Successfully updated old Camera, update old User, created New Visit", camera: pushCamVisit, user: pushUserVisit, visit: VisitResult})
                                                    }
                                                })
                                            }
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }
        })        
    },

}
