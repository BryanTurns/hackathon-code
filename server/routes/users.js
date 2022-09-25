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

  const test = async () => {
    try {
      const newUser = await user.save();

      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  test();
});

// Edit one
router.patch("/", (req, res) => {});

// Delete one
router.delete("/", (req, res) => {});

module.exports = router;
