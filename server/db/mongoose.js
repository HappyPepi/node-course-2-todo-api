var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mojoe:mojoe1@ds139251.mlab.com:39251/todo-app-db' || 'mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
});

module.exports = {
    mongoose
};
