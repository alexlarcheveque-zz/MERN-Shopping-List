const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/Item");

//@route    GET api/items
//@desc     Get All items
//@access   Public
router.get("/test", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

module.export = router;
