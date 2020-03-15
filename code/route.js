'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/guru')
        .post(todoList.insertGuru)
        .put(todoList.updateGuru)
        .get(todoList.guru);       
    
    app.route('/guru/:id')
        .delete(todoList.deleteGuru)
        .get(todoList.getGuruById);    
};