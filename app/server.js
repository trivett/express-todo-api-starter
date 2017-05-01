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

// CREATE

//INDEX

//SHOW



//UPDATE




//DELETE



const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};