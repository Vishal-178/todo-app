const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const listController = require('../controllers/list_controller');
const deleteController = require('../controllers/delete_controller');

// home page
router.get('/',homeController.home);
// link to create a new Item in list
router.post('/create-list',listController.list);
// link to delete one or more item form list
router.get('/delete',deleteController.delete);
module.exports =router;