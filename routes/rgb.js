const express = require('express');
const router = express.Router();
const Post = require('../api_model/rgbModel');

// GET all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

// POST a new post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

// PATCH (update) a post by default ID or condition
router.patch('/', async (req, res) => {
    try {
         // Set your default ID here
        const condition = {id: "AnubhavRathore" }; // Change this to any condition you prefer

        const updateFields = {
            r: req.body.r,
            g: req.body.g,
            b: req.body.b
        };

        const updatedPost = await Post.findOneAndUpdate(
            condition,
            { $set: updateFields },
            { new: true }
        );
        
        if (updatedPost) {
            res.json(updatedPost);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router