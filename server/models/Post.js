const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const PostSchema = new Schema
({
    title:{
        type: String,
        required: true
    },
    caption : {
        type: String,
        required: true
    },
    slug : {
        type: String,
        required: true,
        unique: true
    },
    photo : {
        type: Object,
        required: true
    },
    user : {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    tags : {
        type: [String],
    },
    categories : [{
        type: Schema.Types.ObjectId,
        ref: "PostCategories"
    }],
},
{
    timestamps: true, toJSON: {virtuals:true}
});

PostSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "post",
});

const Post = model("Post", PostSchema);
module.exports = Post;