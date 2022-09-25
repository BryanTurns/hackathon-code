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

router.post("/concert", (req, res) => {
  req.body.json();
});

//get data from customer Frontend -> backend
router.post("/", (req, res) => {
  console.log("on ticket backend");
  console.log(req.body);
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
      .updateOne(
        { userName: concert.userName },
        { $set: { nft: { concert } } }
      );
  });
}

async function mintNft(title, imageSrc, price, description) {
  equire("dotenv").config();
  const {
    AccountId,
    Client,
    PrivateKey,
    TokenCreateTransaction,
    TokenInfoQuery,
    TokenType,
    CustomRoyaltyFee,
    CustomFixedFee,
    TokenSupplyType,
    TokenMintTransaction,
    TokenBurnTransaction,
    TransferTransaction,
    AccountCreateTransaction,
    AccountUpdateTransaction,
    TokenAssociateTransaction,
    AccountBalanceQuery,
    Hbar,
  } = require("@hashgraph/sdk");
  //not here
  console.log(process.env.OPERATOR_ID);
  const operatorId = AccountId.fromString(process.env.OPERATOR_ID);
  const operatorKey = PrivateKey.fromString(process.env.OPERATOR_PVKEY);
  const treasuryId = operatorId;
  const treasuryKey = operatorKey;
  const client = Client.forTestnet().setOperator(operatorId, operatorKey);

  const supplyKey = PrivateKey.generate();
  const adminKey = PrivateKey.generate();
  CID = ["QmVV9uJYfyWQyRM4PATRxtYmWX7EeB9DNZtABFzFWgf33b"];

  let nftCustomFee = await new CustomRoyaltyFee()
    .setNumerator(5)
    .setDenominator(10)
    .setFeeCollectorAccountId(treasuryId)
    .setFallbackFee(new CustomFixedFee().setHbarAmount(new Hbar(200)));

  let nftCreate = await new TokenCreateTransaction()
    .setTokenName("Concert Tickets")
    .setTokenSymbol("TKT")
    .setTokenType(TokenType.NonFungibleUnique)
    .setDecimals(0)
    .setInitialSupply(0)
    .setTreasuryAccountId(treasuryId)
    .setSupplyType(TokenSupplyType.Finite)
    .setMaxSupply(250)
    .setCustomFees([nftCustomFee])
    .setAdminKey(adminKey)
    .setSupplyKey(supplyKey)
    .freezeWith(client)
    .sign(treasuryKey);

  let nftCreateSign = await nftCreate.sign(adminKey);
  let nftCreateSubmit = await nftCreateSign.execute(client);
  let nftCreateRx = await nftCreateSubmit.getReceipt(client);
  let tokenId = nftCreateRx.tokenId;
  console.log(`Created NFT with Token ID ${tokenId}`);

  //Token Query to check if fee schedule is associated with Nft
  // var tokenInfo = await new TokenInfoQuery()
  //   .setTokenId(tokenId)
  //   .execute(client);
  // console.table(tokenInfo.customFees[0]);

  //mint multiple nfts
  nftLeaf = [];
  concert = {
    title: title,
    description: descript,
    price: price,
    imgSrc: imgSrc,
  };
  for (var i = 0; i < 5; i++) {
    nftLeaf[i] = await tokenMinterFcn(CID[0]);

    console.log(
      `Create NFT ${tokenId} with serial: ${nftLeaf[i].serials[0].low}`
    );
  }

  //auto associate nft with an account
  //later

  // //mint multiple nfts FUNCTION
  async function tokenMinterFcn(CID) {
    let mintTx = await new TokenMintTransaction()
      .setTokenId(tokenId)
      .setMetadata([Buffer.from(CID)])
      .freezeWith(client);
    let mintTxSign = await mintTx.sign(supplyKey);
    let mintTxSubmit = await mintTxSign.execute(client);
    mintTx = await mintTxSubmit.getReceipt(client);
    return mintTx;
  }
}

//////////////
//custom concerts
//////////////

// concerts = [
//   {
//     concert: {
//       name:  ,
//       tickets:

//     },
//   }
// ]

module.exports = router;
