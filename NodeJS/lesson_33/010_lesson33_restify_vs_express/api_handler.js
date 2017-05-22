// соединение с бд 
var pool = require('./db_handler');
var mysql = require('mysql');
var path = require('path'); 

module.exports = {
    // згрузка всех элементов
    loadItems: function (req, res) {

        // подключение к бд 
        pool.getConnection(function (err, connection) {

            if (err) console.log(err)

            connection.query('SELECT * FROM `items`', function (err, rows) {
                res.json(rows);
                connection.release(); 
                console.timeEnd(req.method + ' ' + req.url); 
            });
        });

    },

    // создание элемента 
    createItem: function (req, res) {

        // подключение к бд 
        pool.getConnection(function (err, connection) {
            if (err) console.log(err)

            var sql = 'INSERT INTO `items`(name, description, completed) VALUES (?, ?, ?)';
            var inserts = ['test item', 'test description', 1];
            sql = mysql.format(sql, inserts);

            connection.query(sql, function (err, rows) {

                console.log('item created');
                res.send('item created');
                connection.release(); 
                console.timeEnd(req.method + ' ' + req.url); 
            });
        })
    },
 
    // удаление элемента 
    removeItem: function (req, res) {

        pool.getConnection(function (err, connection) {
            if (err) console.log(err)

            var sql = 'DELETE FROM `items` WHERE id=?';
            var inserts = req.params.id;
            sql = mysql.format(sql, inserts);

            connection.query(sql, function (err, rows) {

                console.log('item deleted');
                res.send('item deleted');
                connection.release(); 
                console.timeEnd(req.method + ' ' + req.url);  
            })
        })
    }
}