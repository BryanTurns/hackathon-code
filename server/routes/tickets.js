const express = require("express");
const router = express.Router();
const app = express();
const User = require("../models/users");
const { MongoClient } = require("mongodb");
const cors = require("cors");
var bodyParser = require("body-parser");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//get data from customer Frontend -> backend
router.post("/", (req, res) => {
  //console.log('on ticket backend')
  //   /console.log(req.body)
  addNFT(req.body);
  res.status(200).send({ status: "recieved" });
});

url =
  "mongodb+srv://arhum:arhum@cluster0.zl5usra.mongodb.net/?retryWrites=true&w=majority";

//connect to MongoDB
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("tickets");
  dbo
    .collection("Blockchain")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        throw err;
      } else {
        console.log(result);
        completeDB = result;
      }
      db.close();
    });
});

//add nft to user
function addNFT(concert) {
  console.log("concert");
  console.log(concert);
  console.log(concert.userName);
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("tickets");
    dbo
      .collection("Blockchain")
      .find({})
      .toArray(function (err, result) {
        if (err) {
          throw err;
        } else {
          //console.log(result)
          completeDB = result;
        }
        db.close();
      });
  });
}

//send backend to front end
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("tickets");
  dbo
    .collection("concerts")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        throw err;
      } else {
        console.log(result);
        const data = result;

        router.get("/getData", (request, response) => {
          response.json(data);
        });

        //sendToFront(result)

        /* for(var i = 0;i < result.length;i++){
            fillClass[i]
        } */
      }
      db.close();
    });
});
/* app.get('/getData', (request, response)=>{
    //console.log('working')
    MongoClient.connect(url, function (err, db) {
        if(err) throw err
        var dbo = db.db("tickets")
        dbo.collection('concerts').find({}).toArray(function(err, result){
            if(err){
                throw err
            }else{
            console.log(result)
            response.json(result)
            //sendToFront(result)        
            
            
        }
        db.close()
    })
    })
 }) */

//add nft to user
function addNFT(concert) {
  //console.log("concert")
  //console.log(concert)
  //console.log(concert.userName)
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("tickets");
    dbo
      .collection("Blockchain")
      .updateOne(
        { userName: concert.userName },
        { $set: { nft: { concert } } }
      );
  });
}

module.exports = router;
