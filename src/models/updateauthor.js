const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://devn:devn@cluster0.ueo55.mongodb.net/test');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    title:String,
    year:String,
    genre:String,
    image:String
});

var Authordata = mongoose.model('authordata',AuthorSchema);


module.exports = Authordata;
