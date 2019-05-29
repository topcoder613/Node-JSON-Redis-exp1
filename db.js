const redis = require('redis')
const rejson = require('redis-rejson')

/* Create Client for REDIS DATABASE */
rejson(redis); /* important - this must come BEFORE creating the client */
const client = redis.createClient(process.env.REDIS_URL)

module.exports = client