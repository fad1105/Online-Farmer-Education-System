const express = require('express');
const { isValidObjectId } = require('mongoose');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const Blog = require('../models/Blog');


router.get('/data/:name', async (req, res) => {
    //id = "61744b80f6000183103a2ce2";
    let names = req.params.name;
    let blog = await Blog.find({ type: names });
    if (blog) {
        res.json(blog);
    }
    res.send(req.params.name)
})
router.get('/getallblog', async (req, res) => {
    let blog = await Blog.find({});
    if (blog) {
        res.json(blog);
    }
    res.send("error")
})

router.post('/addblog', [
    body('selectType'),
    body('title '),
    body('imageURL'),
    body('description')
], async (req, res) => {

    let blog = await Blog.create({
        type: req.body.selectType,
        title: req.body.title,
        imgurl: req.body.imageURL,
        description: req.body.description
    })
    console.log(blog);

    res.send({"msg":"success" , "data":"blog"})
});



router.get('/blog/:id', async (req, res) => {
    //id = "61744b80f6000183103a2ce2";
    let blog = await Blog.findOne({ _id: req.params.id.toString() });
    if (blog) {
        console.log(blog);
        res.json(blog);
    }
    else {
        res.json("error")
    }
})

router.delete('/blog/:id', (req,res,next)=>{
    Driver.findByIdAndRemove({_id:req.params.id})
    .then(driver => res.send(driver));
})
module.exports = router