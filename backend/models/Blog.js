const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogSchema = new Schema({
    type:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
        unique: true
    },
    imgurl:{
        type: String,
        required: true
    },
  });
  const Blog = mongoose.model('blog', BlogSchema);
  module.exports = Blog;