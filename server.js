const express = require('express');
var mongoose = require('mongoose');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors');
mongoose.connect('mongodb://localhost/contacts-db');
const contactRouter = require('./api/routes/contacts');
const userRouter = require('./api/routes/user');

const PORT = process.env.PORT || 3000;

const db = mongoose.connection;
db.on('error', (err) => {
   console.log(err);
});
db.once('open', () =>{
   console.log('Database Connection stablished this')
});

/*
app.use((req, res, next) =>{
   console.log('middleware');
   next();
});
*/

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extendes : true}));
app.use(bodyParser.json());

app.use('/contacts', contactRouter);
app.use('/user', userRouter);



app.get('/', (req, res) => {
   res.send('Hello');
});

app.listen(PORT, () => {
   console.log('Server is Running this ' + PORT);
});