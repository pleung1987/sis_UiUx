console.log('got to controller shops.js');

var mongoose = require('mongoose');
var Shop = mongoose.model('Shop');

module.exports = {
  index: async (req,res,next) => {
        const shops = await Shop.find({})
            .populate('_visits')
            .exec((err, shops) => {
                if(err){
                    console.log('error happened', err);
                    next(err)
                } else {
                    console.log('found shops:', shops);
                    res.status(200).json(shops);
                }
            })
},
  show: async (req, res, next) => {
      const cameraId = req.params.cameraId;
      console.log('req.params:', req.params);
      const shop = await Shop.findById(cameraId)
        .populate('_visits')
        .exec((err, shops) => {
            if(err){
                console.log('error happened', err);
                next(err)
            } else {
                console.log('found shops:', shops);
                res.status(200).json(shops);
            }
        })
},
//updating shop details for people coming in
updateShop: (req, res, next) => {
    const cameraId = req.params.cameraId
    console.log('cameraId handing: ', cameraId);
    console.log('form data to update: ', req.body)
    Shop.findOne({_id: cameraId}, (err,shop) => {
        shop.first_name = req.body.first_name,
        shop.last_name = req.body.last_name,
        shop.save( (err, result) => {
            if(err){
                console.log('error happened: ', err);
                next(err)
            }else {
                console.log('Success updating shop:', result);
                res.status(201).json({message: 'Success updating shop', shop: shop})
            }
        })
    })
},
// just setting VIP or Blacklist Status
setShop:  (req, res, next) => {
    const cameraId = req.params.cameraId
    console.log('cameraId handing: ', cameraId);
    console.log('form data to update: ', req.body)
    Shop.findOne({_id: cameraId}, (err,shop) => {
        shop.vip = req.body.vip,
        shop.blacklist = req.body.blacklist,
        shop.save( (err, result) => {
            if(err){
                console.log('error happened: ', err);
                next(err)
            }else {
                console.log('Success updating shop:', result);
                res.status(201).json({message: 'Success updating shop', shop: shop})
            }
        })
    })
},
  

}