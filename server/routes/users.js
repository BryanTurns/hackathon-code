const express = require("express");
const router = express.Router();
const app = express();
const User = require("../models/users");
const {MongoClient} = require('mongodb')

url = "mongodb+srv://arhum:arhum@cluster0.zl5usra.mongodb.net/?retryWrites=true&w=majority"


//connect to MongoDB
MongoClient.connect(url, function (err, db) {

  if(err) throw err
  var dbo = db.db("tickets")
  dbo.collection('Blockchain').find({}).toArray(function(err, result){
      if(err){
          throw err
      }else{
      console.log(result)
      completeDB=result


  }
  db.close()
})
}) 



//get data from customer Frontend -> backend
router.post('/', (req,res) => {
  console.log('on backend')
console.log(req.body)
res.status(200).send({status:'recieved'})
sendToDB(req.body)


})  


//sends customer frontend data to DB
function sendToDB(data){
  console.log('arhumaskdjn')
  console.log(data)
  const sleep = (ms)=>{
  return new  Promise((resolve)=> setTimeout(resolve, ms))
  }

  const main = async()=>{
      await sleep(10000)
  }

   MongoClient.connect(url, function (err, db) {
      if(err) throw err
      var dbo = db.db("tickets")
      dbo.collection('Blockchain').insertOne({userName: data.userName,
          password: data.password},function(err, result) {
              
          });
  })  }











// Getting all
router.get("/", (req, res) => {
  console.log("HIT");
  res.json(3233);
  //   const stuff = async () => {
  //     try {
  //       const users = await User.find();
  //       res.json(users);
  //     } catch (err) {
  //       res.status(500).json({ message: err.message });
  //     }
  //   };
  //   stuff();
});



// Getting one
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// Create one
router.post("/", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    hedera_id: 0,
    hedera_private_key: 0,
    nfts: [],
  });

  const createUser = async () => {
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  createUser();
});

// Edit one
router.patch("/", (req, res) => {});

// Delete one
router.delete("/", (req, res) => {});

module.exports = router;
