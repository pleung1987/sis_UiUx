console.log('got to controller cameras.js');

var mongoose = require('mongoose');
var Camera = mongoose.model('Camera');

module.exports = {
  index: async (req,res,next) => {
        const cameras = await Camera.find({})
            .populate('_visits')
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
        .populate('_visits')
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
//updating camera details for people coming in
updateCamera: (req, res, next) => {
    const cameraId = req.params.cameraId
    console.log('cameraId handing: ', cameraId);
    console.log('form data to update: ', req.body)
    Camera.findOne({_id: cameraId}, (err,camera) => {
        camera.first_name = req.body.first_name,
        camera.last_name = req.body.last_name,
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
// just setting VIP or Blacklist Status
  setCamera:  (req, res, next) => {
    const cameraId = req.params.cameraId
    console.log('cameraId handing: ', cameraId);
    console.log('form data to update: ', req.body)
    Camera.findOne({_id: cameraId}, (err,camera) => {
        camera.vip = req.body.vip,
        camera.blacklist = req.body.blacklist,
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
  

}