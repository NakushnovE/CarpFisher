const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Session = sequelize.define('session', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATE},
    pond: {type: DataTypes.STRING},
    sector: {type: DataTypes.INTEGER}
})

const SessionDay = sequelize.define('sessionDay', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATE},
    waterTemperature: {type: DataTypes.INTEGER},
    airTemperature: {type: DataTypes.INTEGER},
    atmosphericPressure: {type: DataTypes.INTEGER},
    windSpeed: {type: DataTypes.INTEGER},
    windDirection: {type: DataTypes.STRING},
    cloudy: {type: DataTypes.BOOLEAN},
    precipitation: {type: DataTypes.STRING},
    phaseMoon: {type: DataTypes.STRING},
    feedingTime: {type: DataTypes.DATE},
    baitComposition: {type: DataTypes.STRING},
    note: {type: DataTypes.STRING}
})

User.hasMany = function (Session) {
    User.hasMany(Session)
}
Session.belongsTo = function (User) {
    Session.belongsTo(User)
}


Session.hasMany = function (SessionDay) {
    Session.hasMany(SessionDay)
}

SessionDay.belongsTo = function (Session) {
    SessionDay.belongsTo(Session)
}


module.exports = {User, Session, SessionDay}


//придумать сущности и связать