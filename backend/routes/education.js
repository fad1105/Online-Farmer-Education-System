const express = require('express');
const { isValidObjectId } = require('mongoose');
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
module.exports = router