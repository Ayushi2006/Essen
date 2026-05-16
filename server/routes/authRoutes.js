const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();
const User = require("../models/User");

// ================= REGISTER =================
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // VALIDATION (IMPORTANT to avoid 500 errors)
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required",
      });
    }

    // CHECK EXISTING USER
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
      phone: phone || "", // ✅ FIX: prevents undefined crash
    });

    await user.save();

    res.status(201).json({
      message: "User Registered Successfully",
    });

  } catch (error) {
    console.log("REGISTER ERROR:", error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Email",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      "secretkey",
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user,
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// ================= UPLOAD PROFILE PHOTO =================
router.put("/upload-profile", async (req, res) => {
  try {
    const { userId, image } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: image },
      { new: true }
    );

    res.json({
      message: "Profile Updated",
      user: updatedUser,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Upload Failed",
    });
  }
});


// ================= UPDATE ADDRESS =================
router.put("/update-address/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { address: req.body.address },
      { new: true }
    );

    res.json(updatedUser);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Address Update Failed",
    });
  }
});


// ================= UPDATE PHONE =================
router.put("/update-phone/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { phone: req.body.phone },
      { new: true }
    );

    res.json(updatedUser);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Phone Update Failed",
    });
  }
});


// ================= DELETE ACCOUNT =================
router.delete("/delete-account/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.json({
      message: "Account Deleted Successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Delete Failed",
    });
  }
});

module.exports = router;