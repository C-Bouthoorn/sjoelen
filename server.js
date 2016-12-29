// Dependencies
const express = require('express');

// Settings
const PORT = 8080;

// Create server
const app = express();

// Prepare view engine
app.set('views', './site');
app.set('view engine', 'pug');

// Redirect static folder
app.use('/static', express.static('./site/static'));

// Index page
app.use('/', function(req, res) {
  res.render('index');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
