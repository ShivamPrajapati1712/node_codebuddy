const mongoose = require('mongoose');
const { Schema, Types } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const postSchema = new Schema({
    userId: Types.ObjectId,
    title: String,
    description: String,
});

postSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Post', postSchema);