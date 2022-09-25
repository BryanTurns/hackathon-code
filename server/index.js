const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 9000;
require("dotenv").config();
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

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const userRouter = require("./routes/users");
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function createNft() {
  let nftCustomFee = await new CustomRoyaltyFee()
    .setNumberator(1)
    .setDenominatior(10)
    .setCollectorAccountId(treasurryId)
    .setFallbackFee(new CustomFixedFee().setHbarAmount(new Hbar(200)));

  let nftCreate = await new TokenCreateTransaction()
    .setTokenName("Taylor Swift")
    .setTokenSymbol("TAYSFT")
    .setTokenType(TokenType.NonFungibleUnique)
    .setDecimals(0)
    .setInitialSupply(0)
    .setTreasuryAccountId(treasuryId)
    .setSupplyType(TokenSupplyType.Finite)
    .setMaxSuply(100)
    .setCustomFees([nftCustomFee])
    .setAdminKey(supplyKey)
    .setSupplyType(supplyKey)
    .freezeWith(client)
    .sign(treasuryKey);

  let nftCreateSign = await nftCreate.sign(adminKey);
  let nftCreateSubmit = await nftCreateSign.execute(client);
  let nftCreateRx = await nftCreateRx.tokenId;
  console.log(`Created NFT with Token ID: ${tokenId}`);
}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
