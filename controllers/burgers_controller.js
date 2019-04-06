const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

// show all the burger options
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        console.log(data);
        res.render("index", { burger: data });
    });
});

// Adds a burger
router.post("/burger", (req, res) => {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, false 
    ], function (result) {
            res.json({ burger: data });
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