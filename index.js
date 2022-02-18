const express = require('express');
const bp = require('body-parser')
const path = require('path');
const app = express();
// port for localhost
const port = 7000;
// const expressLayouts = require('express-ejs-layouts');
// connecting to database
const db = require('./config/mongoose');
const Contact = require('./modules/contact');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
// seting view engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static("assets"));
app.use('/',require('./routes/index'));

// starting server at port 7000 
app.listen(port,(err)=>{
    if(err){
        console.log(`Error while starting server: ${port}`);
        return;
    }
    console.log(`server is running fine`);
});