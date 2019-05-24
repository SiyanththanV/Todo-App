var bp = require('body-parser');
var urlencodedParser = bp.urlencoded({extended: false});
var mongoose = require('mongoose');

// connect to db
mongoose.connect('')

//create schema
var appSchema = new mongoose.Schema({
    item: String
});

// create model
var TodoItems = mongoose.model('Todo-Items', appSchema);
// var data = [{item: 'do homework'}, {item: 'apply for work'}, {item: 'pay bills'}];

module.exports = function (app) {
    app.get('/todo', function(req, res) {
        TodoItems.find({}, function(err, data) {
            if (err) throw err;
            res.render('todo', {todos: data})
        }) 
    });

    app.post('/todo', urlencodedParser, function(req, res) {
        var newTodo = TodoItems(req.body).save(function (err, data) {
            if (err) throw err;
            res.json(data);
        })
    });

    app.delete('/todo/:item', function(req, res) {
        TodoItems.find({item: req.params.item.replace(/\-/g, " ")}).remove(function (err, data) {
            if (err) throw err;
            res.json(data);
        });
    });
};