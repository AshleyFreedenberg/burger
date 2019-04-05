const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

// show all the burger options
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        res.json(data);
    });
});

// Adds a burger
router.post("/burger", (req, res) => {
    burger.insertOne(
        {
            burger_name: req.body.burger_name
        }, data => {
            res.json(data);
        });
});

// Eats a burger
router.put("/burger/eaten", (req, res) => {
    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        data => {
            res.json(data);
        });

});


module.exports = router;