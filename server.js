const express = require('express');
const app = express();
const port = (process.env.PORT || 8080);
const path = require('path');

// find the app name in package.json
app.use(express.static(__dirname + '/dist/crypto-dashboard'));

app.get('/*', function(req,res) {
  res.sendFile('index.html', { root: 'dist/crypto-dashboard/' });
  });

app.listen(port, () => {
  console.log(`Crypto dashboard listening at http://localhost:${port}`)
})
