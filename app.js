const express = require('express')
const axios = require('axios')
const config = require('./config')
const bodyParser = require('body-parser')

/* START EXPRESS APPLICATION */
const app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

/* URL Routing for API */
app.use('/api', require('./routes/api'))

/* Make Post Request to save sample data */
app.get('/', function(req, res, next) {

    var response_data = {}
    // API Request for allergies
    try {
        response_data.allergies = axios.post('http://localhost:3000/api/allergies', {
            ptId: config.ptId,
            data: require('./sample/allergies.json')
        })
    }
    catch(err) {
        next(err)
    }

    // API Request for medicians
    try {
        response_data.medicians = axios.post('http://localhost:3000/api/medicians', {
            ptId: config.ptId,
            data: require('./sample/medicians.json')
        })
    }
    catch(err) {
        next(err)
    }

    // API Request for problems
    try {
        response_data.problems = axios.post('http://localhost:3000/api/problems', {
            ptId: config.ptId,
            data: require('./sample/problems.json')
        })
    }
    catch(err) {
        next(err)
    }

    res.send(`Sample data is saved with axios request with ptId = ${config.ptId}`);
});

app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
})
