const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const nav=[
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/authors',
        name:'Authors'
    },   
];
const homeRouter=require('./src/routes/homeRoutes')(nav);
const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorsRouter=require('./src/routes/authorRoutes')(nav);
const adminRouter=require('./src/routes/adminRoutes')(nav);
const newauthorRouter=require('./src/routes/newauthorRoutes')(nav);
const updateauthorRouter=require('./src/routes/updateauthorroutes')(nav);
const updatebookRouter=require('./src/routes/updatebookroutes')(nav);

// const signupRouter=require('./routes/signupRoutes')(nav);
// const loginRouter=require('./routes/loginRoutes')(nav);

app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
// app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',adminRouter);
app.use('/newauthor',newauthorRouter);
app.use('/home',homeRouter);
app.use('/updateauthor',updateauthorRouter);
app.use('/updatebook',updatebookRouter);



// app.use('/signup',signupRouter);
// app.use('/login',loginRouter);
var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');


//const session = require('session');
// var app = express();
// view engine setup

app.set('view engine', 'ejs');


// Add this for session
// app.use(session({
//   secret: 'password',//add secret key
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }));


app.use('/', indexRouter);
app.use('/users', usersRouter);


app.get("/",function(req,res){
  res.render("index",
      {
         nav,
          title:'Library',
          heading:'3DS Library'
      }
  );
  });
   
  app.listen(port,()=>{console.log("server ready at  "+port);});
