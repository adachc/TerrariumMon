var sensor = require("node-dht-sensor");

sensor.read(22, 4, function(err, temperature, humidity) {
  if (!err) {
    console.log(`Temperatur: ${temperature}°C, Luftfeuchtigkeit: ${humidity}%`);
  }
});
