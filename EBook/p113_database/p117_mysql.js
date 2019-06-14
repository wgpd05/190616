/**
 * Name:mysql.js
 * Purpose:mysql 連接教學
 * Author:Yun
 * Version:1.0
 * Update:2015-09-25
 */

var mysql = require('mysql');

//建立連線資料
var connection = mysql.createConnection({
    host: 'localhost', //資料庫IP
    user: 'root', //使用者名稱
    password: '', //使用者密碼
    database: 'mysql' //資料庫名稱
});

//嘗試連線
connection.connect();

//倒出SQL結果
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows[0].solution);
});

//結束連線
connection.end();
