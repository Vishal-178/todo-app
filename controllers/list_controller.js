// Contact is used to connect to datatabase and get the data store in it.
const Contact = require('../modules/contact');
// export list function 
module.exports.list = function(req,res){
    // create new item in data base insert new item in database.
    // and redirect back to home page.
    Contact.create(req.body,function(err,newContact){
        if(err){
            console.log("error while pushing datat to db");
            return;
        }
        console.log("***data sucessfuly added*** ", newContact);
        // redirect to home page in views folder.
        return res.redirect('back');
    });
}