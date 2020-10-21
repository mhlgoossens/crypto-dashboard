const express = require('express');
const app = express();
const port = (process.env.PORT || 8080);

// find the app name in package.json
app.use(express.static(__dirname + '/dist/crypto-dashboard'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/crypto-dashboard/index.html'));
  });

app.listen(port, () => {
  console.log(`Crypto dashboard listening at http://localhost:${port}`)
})