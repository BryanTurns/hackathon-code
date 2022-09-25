const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {MongoClient} = require('mongodb')
const port = 9000;
require("dotenv").config();
const cors = require('cors')
var bodyParser=require('body-parser')
const axios = require('axios')


app.use(express.json());

app.use(
  cors({
      origin: "*",
  })
)



 const {
  AccountId,
  PrivateKey,
  Client,
  TokenCreateTransaction,
  TokenType,
  TokenSupplyType,
  TokenMintTransaction,
  TransferTransaction,
  AccountBalanceQuery,
  TokenAssociateTransaction,
} = require("@hashgraph/sdk"); 

require("dotenv").config();






/* mongoose.connect(" mongodb+srv://arhum:arhum@cluster0.ufeho.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));
 */
app.use(express.json());

const userRouter = require("./routes/users");
app.use("/api/users", userRouter);

const ticketRouter = require("./routes/tickets");
app.use("/api/tickets", ticketRouter);
 
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


