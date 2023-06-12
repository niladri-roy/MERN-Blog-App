const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostCategoriesSchema = new Schema({
    name:{
        type: String,
        required: true
    }
},
{
    timestamps: true
})

const PostCategories = model("PostCategories", PostCategoriesSchema);
module.exports = PostCategories;