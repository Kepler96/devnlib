const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://devn:devn@cluster0.ueo55.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true,
useFindAndModify: false});
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title:String,
    author:String,
    genre:String,
    image:String
});

var Bookdata = mongoose.model('bookdata',BookSchema);


module.exports = Bookdata;
