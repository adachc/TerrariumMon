var sensor = require("node-dht-sensor");
var date = require('date-and-time');


exports.getDataPoint = function (callback) {
  //var dataPoint = {timestamp: "", temp: "", humidity: ""};
  sensor.read(22, 4, function(err, temperature, humidity) {
    if (!err) {
      var dataPoint = {timestamp: "", temp: "", humidity: ""};
      console.log(`tmp: ${~~temperature}°C, hum: ${~~humidity}%`);
      dataPoint.timestamp = date.format(new Date(), "DD-MM-YYYY-HH:00");
      dataPoint.temp = ~~temperature;
      dataPoint.humidity = ~~humidity;
      //console.log(dataPoint);
      callback(dataPoint);
    } else{
      console.log("Error generating Datapoint");
    }
  });
}



