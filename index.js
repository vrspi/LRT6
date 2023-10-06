const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// To parse URL-encoded data (from forms)
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { title: 'LRT6' });
});
app.get('/Model', (req, res) => {
    res.render('Model3D', { title: 'Model3D' });
  });

app.post('/Model2', (req, res) => {
  // Log form data to the console
  //console.log(req.body["name"]);
  var dataFromForm = req.body;
  // You can redirect, render a view, send a response, etc.
  res.render('Model3D', { title: 'Model3D', data: dataFromForm });

});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
