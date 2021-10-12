import {makeAutoObservable} from "mobx";

export default class SessionStore {
    constructor() {
        this._session = [
            {id:1, pond: 'Barinovka'}
        ]
        this._sessionDay = [
            {id: 1, airTemperature: '25'},
            {id: 2, airTemperature: '31'},
        ]
    }

    setSession(session) {
        this._session = session
    }
    setSessionDay(sessionDay) {
        this._sessionDay = sessionDay
    }

    get session() {
        return this._session
    }
    get sessionDay() {
        return this._sessionDay
    }


}