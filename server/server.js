const express = require('express');

const cors = require('cors');

const app = express();


require('./configs/database');


app.use(cors());

app.use(express.json({ extended: false}));


const usersController = require('./controllers/usersController');
app.use('/api/users', usersController);

app.listen(2000);
console.log('Server is up, listening in port 2000');


