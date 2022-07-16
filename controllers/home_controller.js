//importing  todo schema
const Todo= require('../models/todo');

//exporting the module  and redering home page
module.exports.home = function(req,res){
    Todo.find({}, function(err, todo){
        if(err){
            console.log('Error in fetching tasks from db');
            return;
        }

        return res.render('home', {
            //sending title name
            tittle: "Todo-List",
            todo: todo
        });
    }
)
}