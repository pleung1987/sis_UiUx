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

//updating shop details ie. brand, branch, address
updateShop: (req, res, next) => {
    const shopId = req.params.shopId
    console.log('shopId handing: ', shopId);
    console.log('form data to update: ', req.body)
    Shop.findOne({_id: shopId}, (err,shop) => {
        shop.brand = req.body.brand,
        shop.branch = req.body.branch,
        shop.address = req.body.address
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
removeCam: (req, res, next) => {
    const shopId = req.params.shopId,
    //Cam will be found because exact String will be provided from DOM form select
    selectCamMac = req.body.mac_addr
    Shop.findOne({_id: shopId}, (err,shop) => {
        if(err){
            console.log('error happened finding shop: ', err);
            next(err)
        } else {
            console.log('found shop: ', shop)
            Camera.findOne({mac_addr: selectCamMac}, (err, camera) => {
                //back-check if paramters given retunrs back camera,in DOM form we will provide exact String
                if(err){
                    console.log('error happened finding camera to update: ', err);
                    next(err)
                } else {
                    shop._cameras.pull(camera._id)
                    shop.save((err, updateShop) =>{
                        if(err){
                            console.log('error happened updating shop: ', err)
                            next(err)
                        } else {
                            console.log('Successfully removed and updated shop camera: ', updateShop)
                            camera._shop = undefined;
                            camera.save( (err, updateCamera) =>{
                                if(err){
                                    console.log('error happened updating camera: ', err);
                                    next(err)
                                } else {
                                    console.log('Successfully remove _shop from Camera: ', updateCamera)
                                    res.json({message:'Successfully remove camera from shop association', shop: updateShop, camera: updateCamera})
                                }
                            })
                        }
                    })
                }
            })
        }
    })
},
deleteShop: (req, res, next) =>{
    const shopId = req.params.shopId
    console.log('shopId to remove: ', shopId)
    Shop.findOneAndRemove({_id:shopId}, (err, shop) =>{
        if(err){
            console.log('error happened removing shop: ', err)
            next(err)
        } else {
            if(shop === null){
                res.json({message:`Shop ID no longer exist`})
            }
            console.log('Successfully removed: ', shop)
            res.json({message:`Success removing ${shop}`})
        }
    })
},

}