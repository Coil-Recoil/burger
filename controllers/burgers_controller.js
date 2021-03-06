// Declaring depencies
var express = require('express');
var router = express.Router();

// Calling data
var burger = require('../models/burger.js');

// Routing
router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

router.post('/burgers', function (req, res) {
    burger.insertOne([
        'burger_name'
    ], [
            req.body.burger_name
        ], function (data) {
            res.redirect('/');
        });
});

router.put('/burgers/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function (data) {
        res.redirect('/');
    });
});

// Exporting routing
module.exports = router;