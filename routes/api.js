const apiRouter = require('express').Router()
const apiController = require('../controllers/apiController')

apiRouter.all('/allergies', apiController.allergies)
apiRouter.all('/medicians', apiController.medicians)
apiRouter.all('/problems', apiController.problems)

module.exports = apiRouter