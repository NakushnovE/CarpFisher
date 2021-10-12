const Router = require('express')
const router = new Router()
const sessionDayController = require('../controllers/sessionDayController')

router.post('/', sessionDayController.create)
router.get('/', sessionDayController.getAll)
router.get('/:id',)
router.delete('/',)
router.put('/',)

module.exports = router