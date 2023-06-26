const express = require('express');
const app = express();

const PORT = 8099;
const ENV_BACKEND_SERVER = process.env.BACKEND_SERVER || "Cannot get env variable";

app.get('/', function (req, res) {
  res.send(ENV_BACKEND_SERVER)
});

app.listen(PORT, function () {
  console.log(`app listening on port ${PORT}!`)
});