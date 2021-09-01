//imports
const SerialPort = require('serialport')
const fetch = require("node-fetch");
const FormData = require('form-data');

var port = "COM3";
var sp = new SerialPort(port, {
  baudRate: 9600,
});

sp.on('open', onPortOpen);
sp.on('data', onData);
sp.on('close', onClose);
sp.on('error', onError);

function onPortOpen(){
    console.log("port is open");
}

function onData(d)
{
    console.log("new data" + d);
    //post(d);
}

function onClose(){
    console.log("port is closed");
}
function onError(){
    console.log("something went wrong");
}

function post(value){
  //prepare data
  let data = {    
    "name" : "NumberOfPeople",
    "value" : value
  };
  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  //post request
  fetch("https://smartloods.herokuapp.com/sensors", {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  });
}

