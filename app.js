const express = require("express");
const axios = require("axios");
const config = require("./config");
const bodyParser = require("body-parser");

/* START EXPRESS APPLICATION */
const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

/* URL Routing for API */
app.use("/api", require("./routes/api"));

/* Make Post Request to save sample data */
app.get("/", function(req, res, next) {

    var responseData = {};
    var atypes = ["allergies", "medicians", "problems"];

    for (atype in atypes) {
        // API Request for atype
        try {
            responseData[atype] = axios.post("http://localhost:3000/api/" + atype, {
                ptId: config.ptId,
                data: require("./sample/" + atype + ".json")
            });
        }
        catch(err) {
            next(err);
        }        
    }

    res.send("Sample data is saved with axios request with ptId = " + config.ptId);
});

app.listen(config.port, () => {
    console.log("Server started on port " + config.port);
})
