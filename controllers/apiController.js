var db = require("../db");
var config = require("../config");

callAPI = (atype, req, res) => {
    if (req.method === "GET") {

        // API for ATYPE GET
        var ptId = req.query.ptId

        db.json_get(config.db_keys[atype] + "_" + ptId, ".", function (err, data) {
            if (err) { throw err; }
            res.json(JSON.parse(data));
        });
    } else if (req.method === "POST") {

        // API for allergies POST
        var ptId = req.body.ptId
        var data = req.body.data

        db.json_set(config.db_keys[atype] + "_" + ptId, ".", JSON.stringify(data), function (err) {
            if (err) {
                throw err;
            }
            res.json({'success': "True"})
        });
    }
};

// API for allergies
module.exports.allergies = (req, res) => {
    callAPI('allergies', req, res);
}

// API for medicians
module.exports.medicians = (req, res) => {
    callAPI('medicians', req, res);
}

// API for problems
module.exports.problems = (req, res) => {
    callAPI('problems', req, res);
}