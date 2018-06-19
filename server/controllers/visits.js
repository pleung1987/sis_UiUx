console.log('got to controller visits.js');

var mongoose = require('mongoose');
var User = mongoose.model('User');
var Visit = mongoose.model('Visit');
var Camera = mongoose.model('Camera');
var Shop = mongoose.model('Shop')
var fs = require('fs');
var async = require("async");

module.exports = {
    getVisitor:  (req,res)=> {
        Visit.find({})
        .sort('-visited')
        .populate('_visitor _camera')
        .exec( function(err,results){
            if(err){
                res.json({message: "Error happened at _vistor _camera", error: err});
            } else {
               Visit.populate(results, 
                {
                    path: '_camera._shop',
                    model: 'Shop'
                }, function(err, endResult) {
                        if(err) {
                                res.json({message: "Error happened at _shop", error: err});
                        } else {
                            res.json({message:"Success", data: endResult});
                        }
               })
            }
        })
    },
    show: (req, res) =>{
        console.log('Visit Id retrieved: ', req.params.id);
        Visit.findOne({_id: req.params.id})
        .sort('-visited')
        .populate('_visitor _camera')
        .exec( (err, result)=> {
            if(err){
                res.json({message: "Error happened", error: err});
            } else {
                console.log("single Visit retrieved:", result);
                res.json({message:"Success", data: result}); 
            }
        })
    },
    create:  (req,res) => {
        //create image file
        var image = req.body.faceImage;
        var bitmap = Buffer.from(image, 'base64');
       
        //NOTE: Fix future bug, so that we don't need to create two image folders to serve front-end and server
        var fileName = `${new Date().toISOString()}-face.jpg` //create the name of the file
        fs.writeFileSync(`../uploads/${fileName}`, bitmap,{ encoding:'base64'});    //save it at path that is set up outside of project folder(back-up)

        var faces = [],
        new_face = req.body.byte_stream;
        //helper function(Euclidean distance)
        function innerLoop(a,b){
            var distance = 0;
            for( var j = 0; j < a.length; j ++ ){
                distance += Math.pow(a[j]- b[j], 2)
            }
            return Math.sqrt(distance)
        }
        //validate user exist or not with byte stream distance
        function validateUser(callback){
            User.find({}, (err, users)=>{
                if(err){
                    console.log('error occured finding users: ', err)
                    res.json({message:"error finding users",error:err})
                } else {
                    for(i in users){
                        faces.push(users[i].byte_stream)
                    }
                    for(var i = 0; i < faces.length; i++){
                        var old_face = faces[i];
                        var distance = innerLoop(new_face, old_face);
                        console.log(`this is the distance of face(${faces[i]}): `, distance);
                        if(distance <= 0.6){
                            return callback(faces[i])
                        }
                    }
                    return callback(0)
                }    
            })
        }
        //New Schema specs
        const newCamera = new Camera({
            _id: new mongoose.Types.ObjectId(),
            mac_addr: req.body.mac_addr
        }, {usePushEach: true})
  
        const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            byte_stream: req.body.byte_stream,
            faceImage: fileName,   //file name is same as in saved folders
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
                            //check if User Exist (new code):
                            validateUser(function(user){
                                if(user === 0){
                                    //no user found
                                    console.log('no user found:', user)
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
                                } else {
                                    console.log('user found:', user)
                                    //update foundUser by findOne byte_stream
                                    User.findOne({byte_stream:user}, (err, foundUser)=>{
                                        console.log(`this is the found user from byte_stream: ${user}`, foundUser)
                                        if(err){
                                            res.json({message:"Error finding user", error: err})
                                        }else{
                                             //handing existing user (event 5)
                                            foundUser._visits.push(newVisit._id)
                                            foundUser.faceImage.push(newUser.faceImage)
                                            foundUser.save((err, pushVisit) => {
                                                if(err){
                                                    console.log('error pushing visit: ', err);
                                                    res.json({message: "Error happened", error: err});
                                                }else{
                                                    console.log('Successfully pushing Visit for User : ', pushVisit);
                                                    // // Create new Visit for old user new camera (event 9)
                                                    Visit.create({_id:newVisit._id, _visitor: foundUser._id, _camera: newCamera._id, visited:newVisit.visited}, (err,VisitResult) => {
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
                                    })
                                }
                            })
                        }
                    })
                }else{
                    //updating from existing camera
                    console.log('pushing newVisit._Id into _visits: ', newVisit._id);
                    // updating old camera (event 1):
                    camera._visits.push(newVisit._id)
                    camera.save((err, pushCamVisit) =>{
                        if(err){
                            console.log('error pushing visit: ', err);
                            res.json({message:"error creating new Camera through push", error: err})
                        }else{
                            console.log('Successfully saving camera with newVisit._id pushed: ', pushCamVisit);
                            //check if user exist (new code):
                            validateUser(function(user){
                                if(user === 0){
                                    console.log('no user found:', user)
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
                                } else {
                                    console.log('user found:', user)
                                    //update user by findOne byte_stream
                                    User.findOne({byte_stream:user}, (err, foundUser)=>{
                                        console.log('this is the found user from byte_stream:', foundUser)
                                        //handing existing user (event 5)
                                        foundUser._visits.push(newVisit._id)
                                        foundUser.faceImage.push(newUser.faceImage)
                                        foundUser.save((err, pushUserVisit)=> {
                                            if(err){
                                                console.log('error pushing visit: ', err);
                                                res.json({message: "Error happened", error: err});
                                            }else{
                                                console.log('Successfully pushing Visit for User : ', pushUserVisit);
                                                // // Create new Visit for old user old camera (event 7)
                                                Visit.create({_id:newVisit._id, _visitor: foundUser._id, _camera: camera._id, visited:newVisit.visited}, (err,VisitResult) => {
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
                                    })
                                }
                            });//end of new code
                        }
                    })
                }
            }
        })        
    },

}
