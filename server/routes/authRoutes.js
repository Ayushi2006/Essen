const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    // CHECK USER
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATE USER
    const user = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    });

    await user.save();

    res.status(201).json({
      message: "Signup successful",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    // TOKEN
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      token,
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// UPDATE ADDRESS
router.put("/update-address/:id", async (req, res) => {
  try {
    const { address } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { address },
      { new: true },
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/update-phone/:id", async (req, res) => {

  try {

    const { phone } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { phone },
      { new: true }
    );

    res.json(user);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }
});

// UPDATE PROFILE PIC
router.put("/upload-profile", async (req, res) => {
  try {
    const { userId, image } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.profilePic = image;

    await user.save();

    res.json({
      message: "Profile updated",
      user,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
