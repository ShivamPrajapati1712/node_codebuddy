const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const userSchema = new Schema({
    name: String,
});

userSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('User', userSchema);