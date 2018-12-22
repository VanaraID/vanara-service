const mysql = require('mysql');
const setting = require('./setting.json');

let db;
const getConnection = () => {
    if (!db) {
        db = mysql.createConnection(setting);
        db.connect((err) => {
            if (!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return db;
};

module.exports = getConnection();