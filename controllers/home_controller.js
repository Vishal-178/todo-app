// Contact is used to connect to datatabase and get the data store in it.
const Contact = require('../modules/contact');
// export home function.
module.exports.home = (req,res)=>{
    // find item in database as item from Contact and render to home page in view folder.
    Contact.find({},function(err,item){
        if(err){
            console.log('error while faching data from the data base');
            return;
        }
        return res.render('home',{
            contact:item,
            title:"Home"
        });
    });
}
