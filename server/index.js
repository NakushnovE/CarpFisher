require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const fileUpload = require('express-fileupload')
const models = require('./models/models')

const router = require('./routes/index')
const errorHandler = require('./middlewere/ErrorHandlingMiddlewere')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(fileUpload({}))

app.use(errorHandler)
//Обработка ошибки последняя Middlewere

/*app.get('/', (req, res) => {
    res.status(200).json({message: "working!!!"})
})*/

//app.listen(3000, () => console.log(`Server started on port ${PORT}`))
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start();

