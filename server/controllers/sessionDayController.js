const {Session} = require("../models/models");

class SessionDayController {
    async create(req, res) {
        const {
            date,
            waterTemperature,
            airTemperature,
            atmosphericPressure,
            windSpeed,
            windDirection,
            cloudy,
            precipitation,
            phaseMoon,
            feedingTime,
            baitComposition,
            note
        } = req.body
        const sessionDay = await  Session.create({date, waterTemperature, airTemperature})
        return res.json(sessionDay)
    }

    async getAll(req, res) {

    }
}

module.exports = new SessionDayController()