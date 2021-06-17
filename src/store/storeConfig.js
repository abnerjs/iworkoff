import { combineReducers, createStore } from "redux"

const secondsBetween = (initialTime, finalTime) => {
    var diff = (finalTime.getDate() - initialTime.getDate()) * 24 * 60 * 60
    diff += (finalTime.getHours() - initialTime.getHours()) * 60 * 60
    diff += (finalTime.getMinutes() - initialTime.getMinutes()) * 60
    diff += finalTime.getSeconds() - initialTime.getSeconds()
    return diff
}

const timeline = []
var tmpaux
var tmpaux2
tmpaux = "2021-06-16 00:11:01".split(/[- :]/)
tmpaux2 = "2021-06-16 3:17:19".split(/[- :]/)
timeline.push({
    app: 'VSCode',
    initialTime: new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2],
        tmpaux[3], tmpaux[4], tmpaux[5]),
    finalTime: new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2],
        tmpaux2[3], tmpaux2[4], tmpaux2[5]),
    diffMs: secondsBetween(
        (new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])),
        (new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2], tmpaux2[3], tmpaux2[4], tmpaux2[5]))
    ),
    isAuth: true
})
tmpaux = "2021-06-16 3:17:20".split(/[- :]/)
tmpaux2 = "2021-06-16 6:17:19".split(/[- :]/)
timeline.push({
    app: 'Figma',
    initialTime: new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2],
        tmpaux[3], tmpaux[4], tmpaux[5]),
    finalTime: new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2],
        tmpaux2[3], tmpaux2[4], tmpaux2[5]),
    diffMs: secondsBetween(
        (new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])),
        (new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2], tmpaux2[3], tmpaux2[4], tmpaux2[5]))
    ),
    isAuth: true
})
tmpaux = "2021-06-16 06:17:20".split(/[- :]/)
tmpaux2 = "2021-06-16 9:17:19".split(/[- :]/)
timeline.push({
    app: 'Tor',
    initialTime: new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2],
        tmpaux[3], tmpaux[4], tmpaux[5]),
    finalTime: new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2],
        tmpaux2[3], tmpaux2[4], tmpaux2[5]),
    diffMs: secondsBetween(
        (new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])),
        (new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2], tmpaux2[3], tmpaux2[4], tmpaux2[5]))
    ),
    isAuth: true
})
tmpaux = "2021-06-16 13:12:01".split(/[- :]/)
tmpaux2 = "2021-06-16 15:15:16".split(/[- :]/)
timeline.push({
    app: 'Google Chrome',
    initialTime: new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2],
        tmpaux[3], tmpaux[4], tmpaux[5]),
    finalTime: new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2],
        tmpaux2[3], tmpaux2[4], tmpaux2[5]),
    diffMs: secondsBetween(
        (new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])),
        (new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2], tmpaux2[3], tmpaux2[4], tmpaux2[5]))
    ),
    isAuth: true
})
tmpaux = "2021-06-16 15:15:17".split(/[- :]/)
tmpaux2 = "2021-06-16 16:11:20".split(/[- :]/)
timeline.push({
    app: 'VSCode',
    initialTime: new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2],
        tmpaux[3], tmpaux[4], tmpaux[5]),
    finalTime: new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2],
        tmpaux2[3], tmpaux2[4], tmpaux2[5]),
    diffMs: secondsBetween(
        (new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])),
        (new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2], tmpaux2[3], tmpaux2[4], tmpaux2[5]))
    ),
    isAuth: true
})
tmpaux = "2021-06-16 16:11:21".split(/[- :]/)
tmpaux2 = "2021-06-16 16:25:42".split(/[- :]/)
timeline.push({
    app: 'Valorant',
    initialTime: new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2],
        tmpaux[3], tmpaux[4], tmpaux[5]),
    finalTime: new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2],
        tmpaux2[3], tmpaux2[4], tmpaux2[5]),
    diffMs: secondsBetween(
        (new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])),
        (new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2], tmpaux2[3], tmpaux2[4], tmpaux2[5]))
    ),
    isAuth: false
})
tmpaux = "2021-06-16 16:25:43".split(/[- :]/)
tmpaux2 = "2021-06-16 17:13:42".split(/[- :]/)
timeline.push({
    app: 'Google Chrome',
    initialTime: new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2],
        tmpaux[3], tmpaux[4], tmpaux[5]),
    finalTime: new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2],
        tmpaux2[3], tmpaux2[4], tmpaux2[5]),
    diffMs: secondsBetween(
        (new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])),
        (new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2], tmpaux2[3], tmpaux2[4], tmpaux2[5]))
    ),
    isAuth: true
})
tmpaux = "2021-06-16 22:18:00".split(/[- :]/)
tmpaux2 = "2021-06-17 1:11:20".split(/[- :]/)
timeline.push({
    app: 'Valorant',
    initialTime: new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2],
        tmpaux[3], tmpaux[4], tmpaux[5]),
    finalTime: new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2],
        tmpaux2[3], tmpaux2[4], tmpaux2[5]),
    diffMs: secondsBetween(
        (new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])),
        (new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2], tmpaux2[3], tmpaux2[4], tmpaux2[5]))
    ),
    isAuth: false
})

const reducers = combineReducers({
    person: function (state, action) {
        return {
            name: 'Victor Rocha Azevedo',
            status: 'Online',
        }
    },
    timelineResult: function (state, action) {
        switch(action.type) {
            case 'DATE_SELECTION_SETTED':
                console.log(state)
                return {
                    ...state,
                    dateSelected: action.payload
                }
            default:
                return {
                    data: timeline,
                    dateSelected: new Date()
                }
        }
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig