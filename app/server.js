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


////////////////////////////////
////////////ROUTES//////////////
////////////////////////////////

// CREATE

//INDEX

//SHOW

//UPDATE

//DELETE

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};