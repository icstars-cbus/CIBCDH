var path = require('path');

var fs = require('fs');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/log_and_regg',{useNewUrlParser: true },{}, function(err){
    if(err){
        console.log('ERROR', err);
    } else {
        console.log('Connected');
    }

});

var model_path = path.join(__dirname, './../models');

// algo to iterate through the models folder
fs.readdirSync(model_path).forEach(function(file){
    if(file.indexOf('.js')>=0){
        require(model_path + '/' + file);
    }
})