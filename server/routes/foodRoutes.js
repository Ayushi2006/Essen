const express = require("express");
const router = express.Router();

const Food = require("../models/Food");

// GET all foods
router.get("/", async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ADD food
router.post("/", async (req, res) => {
    try {
        const newFood = new Food(req.body);

        const savedFood = await newFood.save();

        res.status(201).json(savedFood);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE food
router.delete("/:id", async (req, res) => {
    try {

        await Food.findByIdAndDelete(req.params.id);

        res.json({ message: "Food deleted" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;