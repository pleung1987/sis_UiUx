console.log('got to controller sessions.js');

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const session = require('express-session')
var Manager = mongoose.model('Manager');


module.exports = {
    login: (req,res) => {
        console.log('req.body:', req.body);
        Manager.findOne({email:req.body.email}, (err, manager) => {
            if(err){
                connsole.log('error happened finding Manager: ', err)
                res.json({message:"error happened finding Managerr", error: err})
            } else {
                if(!manager){
                    console.log('manage account does not exist: ', manager);
                    res.json({message:"manager account does not exist", manager: manager})
                }
                else if(!manager.validPassword(req.body.password, manager.password)){
                    console.log('Password is invalid: ', manager);
                    res.json({message:"Password is invalid for:", manager: manager})
                }
                else {
                    console.log('user password fit, Success Login: ', manager)
                    res.json({message: "Success Login"})
                }
                
            }
        })
  },
    register: (req, res) => {
        var newManager = new Manager();
        newManager._id = new mongoose.Types.ObjectId();
        newManager.first_name = req.body.first_name;
        newManager.last_name = req.body.last_name;
        newManager.company = req.body.company;
        newManager.email = req.body.email;
        newManager.password = newManager.generateHash(req.body.password);

        console.log('req.body:', req.body);
        Manager.findOne({email:req.body.email}, (err, manager) => {
            if (err) {
                connsole.log('error happened finding Manager: ', err)
                res.json({message:"error happened finding Managerr", error: err})
            }
            else {
                console.log('found Manager = ', manager)
                if(manager === null) {
                    var newManager = new Manager();
                    newManager._id = new mongoose.Types.ObjectId();
                    newManager.first_name = req.body.first_name;
                    newManager.last_name = req.body.last_name;
                    newManager.company = req.body.company;
                    newManager.email = req.body.email;
                    newManager.password = newManager.generateHash(req.body.password);

                    newManager.save( (err, result) => {
                        if(err){
                            console.log('error creating new Manager: ', err);
                            res.json({message:"error creating new Manager", error: err})
                        } else {
                            console.log('Successfully created new Manager: ', result);
                            console.log('this is the req.session after register: ', req.session);
                            res.json({message:"Success creating new Manager", manager: result})
                        }
                    })
                } else {
                    console.log('manager email exist already: ', manager);
                    res.json({message:"manager already exist, please proceed to loggin", manager: manager})
                }
            }
        })
  },

}