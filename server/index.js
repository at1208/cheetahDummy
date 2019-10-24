const express = require('express');
bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require('mongoose')
const db = require('./config/db')

require('./models/addcontactModel')
require('./Routes/route')(app)


mongoose.connect(db.database, { useUnifiedTopology: true })
.then(() => console.log('Connected to database...'))
.catch(err => console.log(`Error: ${err}`))


const Port = process.env.PORT || 5000
app.listen(Port, () => console.log(`Listening to port ${Port}`))
