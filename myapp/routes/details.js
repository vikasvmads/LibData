var express = require('express');
var router = express.Router();
var detail_controller = require('/Users/vikasmishra/Desktop/devfolio/express/myapp/controllers/detailscontroller.js');

router.get('/getdetail',
function(req, res){
    res.render('details.html', { title: 'Create Details' });
}
);

router.post('/getdetail',
function(req, res){
    //detail_controller.detais_save
    console.log('hi');

    var db = req.db;
    var collection = db.get('details');
    console.log(req.body.firstname);
    collection.insert({//Insert Data to DB
        "firstname":req.body.firstname,
        "lastname": req.body.lastname,
        "age" : req.body.age,
        "address" : req.body.address,
    }, function(err, doc) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
  }
);
module.exports = router;
