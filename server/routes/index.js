const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const sessionRouter = require('./sessionRouter')
const sessionDayRouter = require('./sessionDayRouter')

router.use('/user', userRouter)
router.use('/session', sessionRouter)
router.use('/sessionDay', sessionDayRouter)

module.exports = router