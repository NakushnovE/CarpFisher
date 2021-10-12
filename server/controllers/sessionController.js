const {Session} = require('../models/models')
const ApiError = require('../error/ApiError');

class SessionController {
    async create(req, res, next) {
       try {
            const {date, pond, sector} = req.body
            const session = await Session.create({date, pond, sector})
            return res.json(session)
        } catch (e) {
           next(ApiError.bedRequest(e.message))
       }

    }

    async getAll(req, res) {
        let {date, pond} = req.query
        let session;
        if (!date && !pond) {
            session = await Session.findAndCountAll()
        }
        if (date && !pond) {
            session = await Session.findAndCountAll({where:{date}})
        }
        if (!date && pond) {
            session = await Session.findAndCountAll({where:{pond}})
        }
        if (date && pond) {
            session = await Session.findAndCountAll({where:{date, pond}})
        }
        return res.json(session)
    }

    async getOne(req, res) {
        const {id} = req.params
        const session = await Session.findOne({where:{id}})
        return res.json(session)
    }
}

module.exports = new SessionController()