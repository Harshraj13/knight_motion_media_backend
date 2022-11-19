const router = require('express').Router();
// importing user model
const User = require('../models/userModel')

router.post('/register',async(req,res)=>{
    try{
        const user = await User.findOne({
            email:req.body.email
        });
        if(user){
            return res.send({
                message:"User exisits",
                success:"false"
            });
        }else{

            const newUser = new User(req.body);
            await newUser.save();
            res.send({
                message:"User added Successfullly",
                success:"true"
            })
        }
    }catch(error){
        res.status(500).send({
            message:error.message,
            success:"false"
        })
    }
})

router.post('/login',async function(req,res){
    try{
        const result = await User.findOne({
            email:req.body.email,
            password:req.body.password
        });
        if(result){
            res.send(result);
        }else{
            res.status(500).json("Error")
        }
    }catch(err){
        res.status(500).json(err);
    }
});


router.get('/test-api',async function(req,res){
    res.send("Api status code 200")
})

module.exports = router