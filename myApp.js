
var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here
var r=__dirname+"/views/index.html";

/*app.get("/json",function(req,res) {
    res.send('Hello Express');
   res.sendFile(r);
  
  if(process.env.MESSAGE_STYLE=="uppercase")
    return res.json({"message": "HELLO JSON"});
  else
    return res.json({"message": "Hello json"});
});
*/
/*
app.use((req, res, next)=>{

console.log(req.method+" "+req.path+" - "+req.ip);
next();
});*/

app.get("/now",(req,res,next)=>{

  req.time=new Date().toString();
  next();


}, (req,res)=>{

  res.send({time: req.time});

});

/*
app.get('/:word/echo', function(req, res){
res.json({echo:req.params.word});  
console.log(req.params.word);
});
*/
/*
app.route('/name').get((req, res) => {
   var first = req.query.first;
   var last = req.query.last;
   var jsonObj = {name: first + ' ' + last};
   res.send(jsonObj);
 }).post();
*/
/*
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
        
  */
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use( bodyParser.urlencoded({extended: false}));


app.post('/name',function(req,res){

  res.json({"name" : req.body.first +' '+req.body.last});
});
app.use(express.static( __dirname + "/public"));

//console.log("Hello World");

// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */


/** 2) A first working Express Server */


/** 3) Serve an HTML file */


/** 4) Serve static assets  */


/** 5) serve JSON on a specific route */


/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
