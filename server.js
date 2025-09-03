require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT= process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Welcome to the hotel')
})

//import the routers
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
//use the routers
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);


app.listen(PORT, () => {
    console.log('listening on port 3000');
})