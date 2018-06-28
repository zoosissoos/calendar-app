const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/Event');



//connects mongoose
mongoose.Promise = global.Promise;
mongoose.connect((keys.mongoURI));

//initializes express instance
const app = express();

//allows server to use json bodyparser
app.use(bodyParser.json());

//brings in routes
require('./routes/calRoutes')(app);

//sets port on where the server should listen to requests
const PORT = process.env.PORT || 5000;
app.listen(PORT);


