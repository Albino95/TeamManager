const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./config/mongoose.config')

require('./routes/team.routes') (app)

app.listen(8000, ()=> {console.log("you are connected to port 8000")});