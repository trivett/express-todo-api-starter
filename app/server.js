require('./config.js');

const _ = require("lodash");
const express = require('express');
const bodyParser = require('body-parser');
const ObjectId = require("mongoose").Types.ObjectId;
const pathfinderUI = require('pathfinder-ui')

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');

const app = express();

/////////////////////////////////
/////////MIDDLEWARE//////////////
////////////////////////////////

// make express deal with posts in the form of json (alternative to urlencoded)
app.use(bodyParser.json());

// pathfinder for showing routes prettily
app.use('/routes', function(req, res, next){
	pathfinderUI(app)
	next()
}, pathfinderUI.router)

////////////////////////////////
////////////ROUTES//////////////
////////////////////////////////

//create

//index

//show

//update

//delete
module.exports = {app};