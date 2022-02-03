const express = require('express');
const path = require('path');
const ControllerGet = require('./controller.js')

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.urlencoded({ extended: true }))

app.get('/api/cows', ControllerGet.GetCows);
app.post('/api/cows', ControllerGet.PostCows);

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
