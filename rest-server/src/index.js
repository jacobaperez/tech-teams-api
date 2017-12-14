require('dotenv').config();
require('dotenv').load();

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/routes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.listen(3000, () => {
  console.log('LISTENING AT PORT 3000');
});
