const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const registerController = (req, res, next) =>{
    bcrypt.hash(req.body.password, 10, (err, hash) =>{
        if(err){
            res.json({
                error : err
            })
        }
        let user = new User({
            email : req.body.email,
            password : hash
        });
        user.save()
            .then(result =>{
                res.status(201).json({
                    message : 'registation successfully',
                    user : result
                })
            })
            .catch(error =>{
                res.json({
                    error
                })
            })
    })
};

const loginController = (req, res, next) =>{
    let email = req.body.email;
    let password = req.body.password;
    User.findOne({email})
        .then(user =>{
            if(user){
                bcrypt.compare(password, user.password, (err, result) =>{
                    if(err){
                        res.status(500).json({
                            error : err
                        })
                    }
                    if(result){
                        const token = jwt.sign({email : user.email, _id : user._id}, "secret", { expiresIn: '4h'});
                        res.json({
                            message : 'login successfully',
                            token
                        })
                    }else{
                        res.json({
                            message : 'login Unsuccessfully password dont match'
                        })
                    }
                })
            }
            else {
                res.json({
                    message : 'User not found ! '
                })
            }
        })
};

const allUser = (req, res, next) =>{
  User.find()
      .then(data =>{
          res.status(200).json({
              message : 'All Users',
              data
          })
      })
      .catch(err =>{
          res.status(500).json({
              error : err
          })
      })
};

module.exports = {
    registerController,
    loginController,
    allUser
};

