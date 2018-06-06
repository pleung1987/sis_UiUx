console.log('got to controller cameras.js');

var mongoose = require('mongoose');
var Camera = mongoose.model('Camera');
var Shop = mongoose.model('Shop')

module.exports = {
  index: async (req,res,next) => {
        const cameras = await Camera.find({})
            .populate('_visits _shop')
            .exec((err, cameras) => {
                if(err){
                    console.log('error happened', err);
                    next(err)
                } else {
                    console.log('found cameras:', cameras);
                    res.status(200).json(cameras);
                }
            })
},
  show: async (req, res, next) => {
      const cameraId = req.params.cameraId;
      console.log('req.params:', req.params);
      const camera = await Camera.findById(cameraId)
        .populate('_visits _shop')
        .exec((err, camera) => {
            if(err){
                console.log('error happened', err);
                next(err)
            } else {
                console.log('found camera:', camera);
                res.status(200).json(camera);
            }
        })
},
//updating camera details ie. location
  updateCamera: (req, res, next) => {
    const cameraId = req.params.cameraId
    console.log('cameraId handing: ', cameraId);
    console.log('form data to update: ', req.body)
    Camera.findOne({_id: cameraId}, (err,camera) => {
        camera.location = req.body.location,
        camera.save( (err, result) => {
            if(err){
                console.log('error happened: ', err);
                next(err)
            }else {
                console.log('Success updating camera:', result);
                res.status(201).json({message: 'Success updating camera', camera: camera})
            }
        })
    })
},
// setting camera association to shop
  setCamera:  (req, res, next) => {
    const cameraId = req.body._id
    const shopId = req.body._shop
    console.log('cameraId handing: ', cameraId);
    //shop will be found because exact String will be provided from DOM form select
    console.log('passing form shop Id to update: ', shopId)
    Shop.findOne({_id: shopId}, (err,shop) =>{ 
        if(err){
            console.log('error happened: ', err)
            res.json({message:'error occured finding shop to set', error: err})
        }else{
            console.log('found shop: ', shop)
            //validation: query into DB to see if camerId exist at _cameras:
            Shop.findOne({_cameras: cameraId}, (err, camResult) =>{
                if(err){
                    console.log('error happened: ', err)
                    res.json({message: 'error happened ', error: err})
                }
                console.log('camResult returns: ', camResult)
                //if camera doesn't exist and it can be pushed into _cameras
                if(camResult === null){
                shop._cameras.push(cameraId)
                shop.save((err,pushCamera)=>{
                    if(err){
                        console.log('error pushing camera: ', err);
                        res.json({message: "Error happened", error: err});
                    }else{
                        console.log('Successfully pushed camera to Shop: ', pushCamera)
                        //find Camera's _shop to write data
                        Camera.findOne({_id: cameraId}, (err,camera) => {
                            if(err){
                                console.log('error finding camera: ', err)
                                res.json({message: "Error finding camera", error: err});
                            }else{
                                //overwrites camera._shop to shop._id
                                camera._shop = shop._id
                                camera.save( (err, saveShopInCam) => {
                                    if(err){
                                        console.log('error happened: ', err);
                                        next(err)
                                    }else {
                                        console.log('Success updating camera:', camResult);
                                        res.status(201).json({message: 'Success updating camera', camera: saveShopInCam, shop: pushCamera})
                                    }
                                })
                            }
                        })
                    }
                })
               } else {
                   console.log('camera already taken by shop: ', camResult.branch,'-',camResult.address)
                    res.json({message: `*camera already taken by shop: ${camResult.brand}'s ${camResult.branch} at ${camResult.address}, please remove camera allocation first if allocated wrongly!`})
               }
            })
        }
    })
},
  

}