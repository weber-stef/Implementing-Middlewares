const express = require('express')
const app = express();
const port = 3000;
const router = express.Router();

router.use('/1', function (req, res, next) {
  console.log('Requested Route:', req.originalUrl, 'HTTP-Method used:', req.method);
  next();
}, function (req, res, next) {
  res.send("1. task accomplished, as far as I can tell..");

});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
// mount the router on the app
app.use('/', router);