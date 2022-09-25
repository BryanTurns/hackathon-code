const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const port = 9000;
require("dotenv").config();
const cors = require("cors");
var bodyParser = require("body-parser");
const axios = require("axios");

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

require("dotenv").config();

async function mintNft() {
  require("dotenv").config();
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
  tokens = [];

  for (var i = 0; i < 5; i++) {
    nftLeaf[i] = await tokenMinterFcn(CID[0]);
    tokens.push(nftLeaf[i].serials[0].low);

    console.log(
      `Create NFT ${tokenId} with serial: ${nftLeaf[i].serials[0].low}`
    );
  }

  return { tokens: tokens, tokenId: tokenId.num.low };

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
  async function getNft() {
    const data = await mintNft();
    res.send(data);
  }
  getNft();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
