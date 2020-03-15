'use strict';
const shortid = require('shortid');
var dateFormat = require('dateformat');
var now = new Date();
var response = require('./res');
var connection = require('./conn');

exports.guru = function(req, res) {
    connection.query('SELECT id_guru, name, gender, teach_type, address FROM tbl_guru', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.getGuruById = function(req, res) {
    
    var id_guru = req.params.id;

    connection.query('SELECT id_guru, name, gender, teach_type, address FROM tbl_guru where id_guru = ?',
    [ id_guru ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.insertGuru = function(req, res) {
    
    var id_guru = shortid.generate();
    var name = req.body.name;
    var gender = req.body.gender;
    var teach_type = req.body.teach_type;
    var address = req.body.address;
    var updated_at = dateFormat(now, "yyyy-mm-dd HH:MM:ss");

    connection.query('INSERT INTO tbl_guru values (?,?,?,?,NULL,?,?)',
    [ id_guru, name, gender, teach_type, address, updated_at ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan Guru!", res)
        }
    });
};
exports.updateGuru = function(req, res) {
    
    var id_guru = req.body.id_guru;
    var name = req.body.name;
    var gender = req.body.gender;
    var teach_type = req.body.teach_type;
    var address = req.body.address;
    var updated_at = dateFormat(now, "yyyy-mm-dd HH:MM:ss");

    connection.query('UPDATE tbl_guru SET name = ?, gender = ?, teach_type = ?, address = ?, updated_at = ? WHERE id_guru = ?',
    [ name, gender, teach_type, address, updated_at, id_guru ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Guru dengan ID "+id_guru+" telah diubah", res)
        }
    });
};

exports.deleteGuru = function(req, res) {
    
    var id_guru = req.params.id;

    connection.query('DELETE FROM tbl_guru WHERE id_guru = ?',
    [ id_guru ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus guru dengan ID "+id_guru+"", res)
        }
    });
};