var details = require('/Users/vikasmishra/Desktop/devfolio/express/myapp/models/details.js');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

exports.details_list = function(req,res){
    res.render('details.html', { title: 'Create Details' });
};

