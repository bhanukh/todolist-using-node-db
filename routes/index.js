// require express for setting up the express server
const express=require('express');


// require router for setting up the routing
const router=express.Router();

// home Page
const homeController=require('../controllers/home_controller');


// creating Tasks
const createController=require('../controllers/create_controller');

//deleting task
const deleteController=require('../controllers/delete_controller');


//routing for home page
router.get('/', homeController.home);

//routing for create-task
router.post('/create-task', createController.home);


//routing for delete-task
router.get('/delete-task', deleteController.home);

//exporting module
module.exports= router;