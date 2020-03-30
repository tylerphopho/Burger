const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/add", function(req, res){
    console.log(req.body)

    burger.insertOne(["burger_name"], [req.body.burger_name], function(results){
        res.json({ id: results.insertId });
    });
})

router.put("/api/eat/:id", function(req, res){
    let condition = "burger_id = " + req.params.id;
    console.log(req.params.id);
    console.log("condition", condition)
    burger.updateOne(
        {
            devoured: true
        },
        condition,
        function(results) {
            if(results.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).send()
        }
    );
});

router.deleteOne("/api/remove/:id", function(req,res){
    let id = req.params.id;
    burger.deleteOne(id, data => {
        console.log("Burger removed.")
        res.json(data)
    });
});

module.exports = router;