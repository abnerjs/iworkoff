import { combineReducers, createStore } from "redux"
import dataApps from './dataApps.json'

var timeline = []
var totalAuth = 0
var totalNoAuth = 0
var percentAuth = 0
var percentNoAuth = 0
var totalAtiv = 0
var totalIdling = 0
for (let access of dataApps) {
    timeline.push(...access.lstAtividades)
    totalAuth += access.resumoAtividades.tempoAutorizado
    totalNoAuth += access.resumoAtividades.tempoNaoAutorizado
    percentAuth += access.resumoAtividades.porcentagemAutorizado
    percentNoAuth += access.resumoAtividades.porcentagemNaoAutorizado
    totalAtiv += access.tempoAtivoSegundos
    totalIdling += access.tempoInativoSegundos
}
percentAuth /= dataApps.length
percentNoAuth /= dataApps.length


const reducers = combineReducers({
    person: function (state, action) {
        return {
            name: dataApps[0].nomUsuario,
            status: dataApps[dataApps.length - 1].flgSituacao === 'A' ? 'Online' : 'Offline',
        }
    },
    timelineResult: function (state, action) {
        switch(action.type) {
            case 'DATE_SELECTION_SETTED':
                return {
                    ...state,
                    dateSelected: action.payload
                }
            default:
                return {
                    data: timeline,
                    dateSelected: new Date(),
                    weekTime: {
                        initial: new Date(),
                        final: new Date(),
                    }
                }
        }
    },
    generalActivities: function (state, action) {
        return {
            dtaHoraInicio: dataApps[0].dtaHorInicio,
            dtaHoraFim: dataApps[dataApps.length - 1].flgSituacao === 'F' ? dataApps[dataApps.length - 1].dtaHorFim : 'Ativo',
            totalAuth: totalAuth,
            totalNoAuth: totalNoAuth,
            totalAtiv: totalAtiv,
            totalIdling: totalIdling,
            percentAuth: percentAuth,
            percentNoAuth: percentNoAuth
        }
    }

})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig