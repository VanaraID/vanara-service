const db = require('../mysql-service');
const { InternalServerError } = require('../vanara-error');
const query = 'SELECT * FROM hc_user';

db.query(query, (err, results) => {
    if (err) {
        throw new InternalServerError(err);
    }
    if(!err) {
        console.log(results);
    }
    db.end();
});