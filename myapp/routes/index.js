var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var collection = db.get('details');
  collection.find({},{},function(e,docs){
     console.log(docs);
      res.json({
          "userlist" : docs
      });
    });
});
module.exports = router;
