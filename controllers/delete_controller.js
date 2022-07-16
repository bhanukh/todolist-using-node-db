//importing  todo schema
const Todo= require('../models/todo');

//exporting the module  and redering delete task
module.exports.home = function(req,res){
  // get the id from query
  var id = req.query;

  // checking the number of tasks selected to delete
  var count = Object.keys(id).length;
  for(let i=0; i < count ; i++){
      
      // finding and deleting tasks from the DB one by one using id
      Todo.findByIdAndDelete(Object.keys(id)[i], function(err){
      if(err){
          console.log('error in deleting task');
          }
      })
  }
  return res.redirect('back'); 
}