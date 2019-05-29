var db = require('../db')
var config = require('../config')

// API for allergies
module.exports.allergies = (req, res) => {
        
    if (req.method == 'GET') {

        // API for allergies GET
        var ptId = req.query.ptId

        db.json_get(config.db_keys.allergies, `._${ptId}`, function (err, data) {
            if (err) { throw err; }
            res.json(JSON.parse(data));
        });
    } else if (req.method == 'POST') {

        // API for allergies POST
        var ptId = req.body.ptId
        var data = req.body.data

        db.json_set(config.db_keys.allergies, '.', JSON.stringify({[`_${ptId}`] : data}), function (err) {
            if (err) {
                throw err;
            }
            res.json({'success': "True"})
        });
    }
}

// API for medicians
module.exports.medicians = (req, res) => {
    
    if (req.method == 'GET') {

        // API for medicians GET
        var ptId = req.query.ptId

        db.json_get(config.db_keys.medicians, `._${ptId}`, function (err, data) {
            if (err) { throw err; }
            res.json(JSON.parse(data));
        });
    } else if (req.method == 'POST') {

        // API for medicians POST
        var ptId = req.body.ptId
        var data = req.body.data

        db.json_set(config.db_keys.medicians, '.', JSON.stringify({[`_${ptId}`] : data}), function (err) {
            if (err) {
                throw err;
            }
            res.json({'success': "True"})
        });
    }
}

// API for problems
module.exports.problems = (req, res) => {
    
    if (req.method == 'GET') {

        // API for problems GET
        var ptId = req.query.ptId

        db.json_get(config.db_keys.problems, `._${ptId}`, function (err, data) {
            if (err) { throw err; }
            res.json(JSON.parse(data));
        });
    } else if (req.method == 'POST') {

        // API for problems POST
        var ptId = req.body.ptId
        var data = req.body.data

        db.json_set(config.db_keys.problems, '.', JSON.stringify({[`_${ptId}`] : data}), function (err) {
            if (err) {
                throw err;
            }
            res.json({'success': "True"})
        });
    }
}