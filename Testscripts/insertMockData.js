var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("terradb");
  var myobj = [
    { timestamp: "01-01-2022 00:00", temp: "22", humidity: "40"}, 
    { timestamp: "01-01-2022 02:00", temp: "24", humidity: "45"},
    { timestamp: "01-01-2022 04:00", temp: "25", humidity: "43"},
    { timestamp: "01-01-2022 06:00", temp: "26", humidity: "44"},
    { timestamp: "01-01-2022 08:00", temp: "24", humidity: "46"},
    { timestamp: "01-01-2022 10:00", temp: "27", humidity: "47"},
    { timestamp: "01-01-2022 12:00", temp: "27", humidity: "43"},
    { timestamp: "01-01-2022 14:00", temp: "25", humidity: "48"},
    { timestamp: "01-01-2022 16:00", temp: "25", humidity: "42"},
    { timestamp: "01-01-2022 18:00", temp: "26", humidity: "45"},
    { timestamp: "01-01-2022 20:00", temp: "28", humidity: "43"},
    { timestamp: "01-01-2022 22:00", temp: "30", humidity: "45"}
  ];
  dbo.collection("testdata").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});


