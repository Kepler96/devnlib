const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user1:user1@cluster.g58hq.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    title:String,
    year:String,
    genre:String,
    image:String
});

var Authordata = mongoose.model('authordata',AuthorSchema);


module.exports = Authordata;
