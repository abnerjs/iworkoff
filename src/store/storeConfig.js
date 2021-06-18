import { combineReducers, createStore } from "redux"
import dataApps from './dataApps.json'

function stringToDate(dtaHorInicio) {
    const tmpaux = dtaHorInicio.split(/[- :]/)
    return new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])
}

function withoutTime(day, aux) {
    day.setHours(0, 0, 0, 0)
    aux.setHours(0, 0, 0, 0)

    return (day.getTime() === aux.getTime())
}

function getDataByDateSelected(dateSelected) {
    for (let dataDay of dataApps) {
        if (withoutTime(stringToDate(dataDay.dtaHorInicio), dateSelected)) {
            console.log(dataDay)
            return dataDay
        }
    }
}

const reducers = combineReducers({
    person: function (state, action) {
        return {
            name: dataApps[0].nomUsuario,
            status: dataApps[dataApps.length - 1].flgSituacao === 'A' ? 'Online' : 'Offline',
        }
    },
    timelineResult: function (state, action) {
        switch (action.type) {
            case 'DATE_SELECTION_SETTED':
                return {
                    ...state,
                    dateSelected: action.payload,
                    dtaHoraFim: getDataByDateSelected(action.payload) ? getDataByDateSelected(action.payload).flgSituacao === 'F' ? dataApps[dataApps.length - 1].dtaHorFim : 'Ativo' : 'Sem atividade',
                    data: getDataByDateSelected(action.payload) ? getDataByDateSelected(action.payload).lstAtividades : undefined,
                    dtaHoraInicio: getDataByDateSelected(action.payload) ? getDataByDateSelected(action.payload).dtaHorInicio : 'Sem atividade',
                    dataBrief: getDataByDateSelected(action.payload) ? getDataByDateSelected(action.payload).resumoAtividades.lstDetalhes : undefined,
                    totalAuth: getDataByDateSelected(action.payload) ? getDataByDateSelected(action.payload).resumoAtividades.tempoAutorizado : undefined,
                    totalNoAuth: getDataByDateSelected(action.payload) ? getDataByDateSelected(action.payload).resumoAtividades.tempoNaoAutorizado : undefined,
                    tempoRegistradoSegundos: getDataByDateSelected(action.payload) ? getDataByDateSelected(action.payload).tempoRegistradoSegundos : undefined,
                    totalAtiv: getDataByDateSelected(action.payload) ? getDataByDateSelected(action.payload).tempoAtivoSegundos : undefined,
                    totalIdling: getDataByDateSelected(action.payload) ? getDataByDateSelected(action.payload).tempoInativoSegundos : undefined,
                    percentAuth: getDataByDateSelected(action.payload) ? getDataByDateSelected(action.payload).resumoAtividades.porcentagemAutorizado : undefined,
                    percentNoAuth: getDataByDateSelected(action.payload) ? getDataByDateSelected(action.payload).resumoAtividades.porcentagemNaoAutorizado : undefined
                }
            default:
                return {
                    data: getDataByDateSelected(new Date()) ? getDataByDateSelected(new Date()).lstAtividades : undefined,
                    dataBrief: getDataByDateSelected(new Date()) ? getDataByDateSelected(new Date()).resumoAtividades.lstDetalhes : undefined,
                    dateSelected: new Date(),
                    weekTime: {
                        initial: new Date(),
                        final: new Date(),
                    },
                    dtaHoraInicio: getDataByDateSelected(new Date()) ? getDataByDateSelected(new Date()).dtaHorInicio : 'Sem atividade',
                    dtaHoraFim: getDataByDateSelected(new Date()) ? getDataByDateSelected(new Date()).flgSituacao === 'F' ? dataApps[dataApps.length - 1].dtaHorFim : 'Ativo' : 'Sem atividade',
                    totalAuth: getDataByDateSelected(new Date()) ? getDataByDateSelected(new Date()).resumoAtividades.tempoAutorizado : undefined,
                    totalNoAuth: getDataByDateSelected(new Date()) ? getDataByDateSelected(new Date()).resumoAtividades.tempoNaoAutorizado : undefined,
                    tempoRegistradoSegundos: getDataByDateSelected(new Date()) ? getDataByDateSelected(new Date()).tempoRegistradoSegundos : undefined,
                    totalAtiv: getDataByDateSelected(new Date()) ? getDataByDateSelected(new Date()).tempoAtivoSegundos : undefined,
                    totalIdling: getDataByDateSelected(new Date()) ? getDataByDateSelected(new Date()).tempoInativoSegundos : undefined,
                    percentAuth: getDataByDateSelected(new Date()) ? getDataByDateSelected(new Date()).resumoAtividades.porcentagemAutorizado : undefined,
                    percentNoAuth: getDataByDateSelected(new Date()) ? getDataByDateSelected(new Date()).resumoAtividades.porcentagemNaoAutorizado : undefined
                }
        }
    },

})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig