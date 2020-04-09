const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        let hbsObject = {
            burger: data
        };
        console.log(data);
        res.render("index", hbsObject);
    });
});

router.post("/api/add", function(req, res){
    var name = req.body.name;
    console.log(`burger name: ${name}`);
    burger.insert(name, data => {
        res.json(data);
    });
});

router.put("/api/eat/:id", function(req, res){
let id = req.params.id;

burger.update(id, data => {
    res.json(data);
    });
});

router.delete("/api/remove/:id", function(req,res){
    let id = req.params.id;
    burger.delete(id, data => {
        console.log("Burger removed.")
        res.json(data)
    });
});

module.exports = router;