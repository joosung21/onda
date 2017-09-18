const express = require('express');
const app = express();
const pug = require('pug');
const bodyParser = require('body-parser');
const request = require('request-promise');
app.set('views', './views');
app.set('view engine', 'pug');
app.use('/', express.static('public'));
app.locals.moment = require('moment');

const jsonParser = bodyParser.json();


app.get('/', function (req, res){
  request({
    uri: 'https://api.cosmicjs.com/v1/01851310-976c-11e7-b522-ebf78181a6d4/object-type/pages',
    qs: {
      pretty: true,
      hide_metafields: true
    },
    json: true
  })
  .then(data => {
    console.log(data);
    res.render('index', { data });
  })
  .catch(err => {
    console.log(err);
  });
});





app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});