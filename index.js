// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



// your first API endpoint... 
app.get("/api/:date", function (req, res) {
  function isUTCString(value) {
    return typeof value === 'string' && !isNaN(Date.parse(value));
  }
 if(!isUTCString(req.params.date)){
  const unixTimestamp=req.params.date;
  const date=new Date(unixTimestamp*1000)
  res.json({unix:unixTimestamp,"utc":date.toString()});
 }else{
   
  const date=new Date(req.params.date)
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    res.json({unix:unixTimestamp,"utc":date.toString()});
}
  
 
});



// listen for requests :)
const port=process.env.PORT||3000
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
