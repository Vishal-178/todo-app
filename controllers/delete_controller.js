// Contact is used to connect to datatabase and get the data store in it.
const Contact = require('../modules/contact');
// export delete function.
module.exports.delete = function(req,res){

    let id = req.query.id;
    // check if id is single then it is in string, and if more then one item is select then id is object
    // so if id is string we directly remove that id or
    // if id is object we loop through the id object and delete each id.
    if(typeof(id)==="string"){
        delteItem(id);
    }else if(typeof(id)==='object'){
        for(let i=0; i<id.length; i++){
            delteItem(id[i]);
        }
    }
    // redirect to home page.
    return res.redirect('back'); 
}
// this function use in upper if else statement to delete the id and if error return the error.
function delteItem(id){
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log("error while deleting an object from the database");
            return;
        }  
    });
}