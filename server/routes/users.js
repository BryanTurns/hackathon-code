const express = require("express");
const router = express.Router();
const User = require("../models/users");

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
router.get("/:id", getUser, (req, res) => {
  res.status(200).json(user.username);
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

async function getUser(req, res, next) {
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

module.exports = router;
