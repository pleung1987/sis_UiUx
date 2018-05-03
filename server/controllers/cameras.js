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
    replaceCamera: async(req, res, next) => {
    //enforce that req.body must contain all the fields
    // const cameraId = req.params.cameraId;
    // const newCamera = req.body;
    // console.log('cameraId is: ', cameraId);
    // console.log('newCamera is: ', newCamera);
    // const result = await Camera.findByIdAndUpdate(cameraId, newCamera);
    // console.log('result: ', result);
    // res.status(200).json({success: true , result})
},
    updateCamera: async(req, res, next) => {
    // // req.body may contain any number of fields
    // const cameraId = req.params.cameraId;
    // const newCamera = req.body;
    // const result = await Camera.findByIdAndUpdate(cameraId, newCamera);
    // res.status(200).json({success: true , result})
},
  

}
