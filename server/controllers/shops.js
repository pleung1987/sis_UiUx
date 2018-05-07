console.log('got to controller shops.js');

var mongoose = require('mongoose');
var Shop = mongoose.model('Shop');
var Camera = mongoose.model('Camera')

module.exports = {
  index: async (req,res,next) => {
        const shops = await Shop.find({})
            .populate('_cameras')
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
      const shopId = req.params.shopId;
      console.log('req.params:', req.params);
      const shop = await Shop.findOne({_id:shopId})
        .populate('_cameras')
        .exec((err, shop) => {
            if(err){
                console.log('error happened', err);
                next(err)
            } else {
                console.log('found shop:', shop);
                res.status(200).json(shop);
            }
        })
},
  createShop: (req, res, next) => {
    const newShop = new Shop({
        _id: new mongoose.Types.ObjectId(),
        brand: req.body.brand,
        branch: req.body.branch,
        address: req.body.address
    })
    Shop.findOne({brand: newShop.brand, branch: newShop.branch, address: newShop.address}, (err, shop) =>{
        if(err){
            console.log('error happened finding shop', err);
            next(err)
        } else {
            if(shop === null){
                console.log('found no existing shop, creating shop...')
                Shop.create(newShop, (err, result) =>{
                    if(err){
                        console.log('error happened', err);
                        res.json(err)
                    } else {
                        console.log('Successfully created new shop: ', result);
                        res.status(201).json({message:'create Success', shop: result})
                    }
                })
             } else {
                 console.log('found existing shop: ', shop)
                 res.json({message: 'shop exists', shop: shop})
             }
         }
    })
},

//updating shop details
updateShop: (req, res, next) => {
    const shopId = req.params.shopId
    console.log('shopId handing: ', shopId);
    console.log('form data to update: ', req.body)
    Shop.findOne({_id: shopId}, (err,shop) => {
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
// setting camera to shop
setShop:  (req, res, next) => {
    const shopId = req.body.shopId
    console.log('shopId handing: ', shopId);
    const cameraId = req.params.cameraId
    Shop.findOne({_id: shopId}, (err,shop) => {
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