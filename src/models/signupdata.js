const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://devn:devn@cluster0.ueo55.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true,
useFindAndModify: false});

const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    email:String,
    password:String
});

var Signupdata = mongoose.model('signupdata',SignupSchema);


module.exports = Signupdata;
