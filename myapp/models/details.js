var mongo = require('mongoose')

var schema = mongo.Schema

var detailS = new schema({
    firstname : String,
    lastname: String,
    age : { type:String , max:65 , min : 18 , required:true},
    address : String,
})

module.exports = mongo.model('detail',detailS);