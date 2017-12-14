const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./db/routes/routes.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.listen(3000, () => {
  console.log(`I've been to the port 3000
Not much has changed but they lived under water
And your great great great grand daughter
Is doing fine, doing fine`);
});
