const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

//DB config
const mongodbAddress = 'mongodb://melhoruser:melhorteste11@ds247852.mlab.com:47852/back-end-teste';
mongoose.connect(mongodbAddress, { useNewUrlParser: true });
require('./src/models/Phone');

//Server config
app.use(express.json());
app.use(cors());
app.use('/api', require('./src/routes'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('on: '+port));