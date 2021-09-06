const express = require('express'); 
const app = express();
const bodyParser = require('body-parser'); 
//const session = require('express-session');
const db = require('./models/db.js');
const GLOBAL = global || window;
//const morgan = require('morgan');
// const fs = require('fs');

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({
  extended: true
}));// Body parser use JSON data

if(GLOBAL.SQLpool === undefined){
	GLOBAL.SQLpool = db.createPool(); //create a global sql pool connection
} 
app.use(require('./controllers'));
app.listen('3000', function(){
	console.log("Connected on port 3000.");
});