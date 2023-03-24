import { combineReducers, createStore } from "redux";
import dataApps from "./dataApps.json";

function stringToDate(dtaHorInicio) {
  const tmpaux = dtaHorInicio.split(/[- :]/);
  let dateChange = new Date(
    new Date().getFullYear().toString(),
    new Date().getMonth().toString(),
    tmpaux[2],
    tmpaux[3],
    tmpaux[4],
    tmpaux[5]
  );
  console.log(dateChange);
  return dateChange;
}

function withoutTime(day, aux) {
  day.setHours(0, 0, 0, 0);
  aux.setHours(0, 0, 0, 0);

  return day.getTime() === aux.getTime();
}

function getDataByDateSelected(dateSelected) {
  for (let dataDay of dataApps) {
    if (withoutTime(stringToDate(dataDay.dtaHorInicio), dateSelected)) {
      return dataDay;
    }
  }
}

function getDataByWeekSelected(dateSelected) {
  const arr = getDaysOfWeek(dateSelected);
  var arrWeek = [];
  const keys = arr ? Object.keys(arr) : {};
  for (let dataDay of dataApps) {
    for (let key of keys) {
      if (withoutTime(stringToDate(dataDay.dtaHorInicio), arr[key])) {
        arrWeek.push(dataDay ? dataDay : []);
      }
    }
  }
  return arrWeek;
}

function getDaysOfWeek(date) {
  var arr = {
    monday: date,
    tuesday: date,
    wednesday: date,
    thursday: date,
    friday: date,
  };
  arr.monday = new Date(
    date.getTime() - date.getDay() * 24 * 60 * 60 * 1000 + 24 * 60 * 60 * 1000
  );
  arr.tuesday = new Date(arr.monday.getTime() + 24 * 60 * 60 * 1000);
  arr.wednesday = new Date(arr.tuesday.getTime() + 24 * 60 * 60 * 1000);
  arr.thursday = new Date(arr.wednesday.getTime() + 24 * 60 * 60 * 1000);
  arr.friday = new Date(arr.thursday.getTime() + 24 * 60 * 60 * 1000);

  return arr;
}

const reducers = combineReducers({
  person: function (state, action) {
    return {
      name: dataApps[0].nomUsuario,
      status:
        dataApps[dataApps.length - 1].flgSituacao === "A"
          ? "Online"
          : "Offline",
    };
  },
  timelineResult: function (state, action) {
    switch (action.type) {
      case "DATE_SELECTION_SETTED":
        return {
          ...state,
          dateSelected: action.payload,
          weekTime: getDaysOfWeek(action.payload),
          dtaHoraFim: getDataByDateSelected(action.payload)
            ? getDataByDateSelected(action.payload).flgSituacao === "F"
              ? dataApps[dataApps.length - 1].dtaHorFim
              : "Ativo"
            : "Sem atividade",
          data: getDataByDateSelected(action.payload)
            ? getDataByDateSelected(action.payload).lstAtividades
            : undefined,
          dataWeek: getDataByWeekSelected(action.payload)
            ? getDataByWeekSelected(action.payload)
            : undefined,
          dtaHoraInicio: getDataByDateSelected(action.payload)
            ? getDataByDateSelected(action.payload).dtaHorInicio
            : "Sem atividade",
          dataBrief: getDataByDateSelected(action.payload)
            ? getDataByDateSelected(action.payload).resumoAtividades.lstDetalhes
            : undefined,
          totalAuth: getDataByDateSelected(action.payload)
            ? getDataByDateSelected(action.payload).resumoAtividades
                .tempoAutorizado
            : undefined,
          totalNoAuth: getDataByDateSelected(action.payload)
            ? getDataByDateSelected(action.payload).resumoAtividades
                .tempoNaoAutorizado
            : undefined,
          tempoRegistradoSegundos: getDataByDateSelected(action.payload)
            ? getDataByDateSelected(action.payload).tempoRegistradoSegundos
            : undefined,
          totalAtiv: getDataByDateSelected(action.payload)
            ? getDataByDateSelected(action.payload).tempoAtivoSegundos
            : undefined,
          totalIdling: getDataByDateSelected(action.payload)
            ? getDataByDateSelected(action.payload).tempoInativoSegundos
            : undefined,
          percentAuth: getDataByDateSelected(action.payload)
            ? getDataByDateSelected(action.payload).resumoAtividades
                .porcentagemAutorizado
            : undefined,
          percentNoAuth: getDataByDateSelected(action.payload)
            ? getDataByDateSelected(action.payload).resumoAtividades
                .porcentagemNaoAutorizado
            : undefined,
        };
      case "TYPEOF_ANALYTICS_SELECTION_SETTED":
        return {
          ...state,
          typeOfAnalytics: action.payload,
        };
      default:
        return {
          data: getDataByDateSelected(new Date())
            ? getDataByDateSelected(new Date()).lstAtividades
            : undefined,
          dataWeek: getDataByWeekSelected(new Date())
            ? getDataByWeekSelected(new Date())
            : undefined,
          dataBrief: getDataByDateSelected(new Date())
            ? getDataByDateSelected(new Date()).resumoAtividades.lstDetalhes
            : undefined,
          dateSelected: new Date(),
          weekTime: getDaysOfWeek(new Date()),
          typeOfAnalytics: "Diário",
          dtaHoraInicio: getDataByDateSelected(new Date())
            ? getDataByDateSelected(new Date()).dtaHorInicio
            : "Sem atividade",
          dtaHoraFim: getDataByDateSelected(new Date())
            ? getDataByDateSelected(new Date()).flgSituacao === "F"
              ? dataApps[dataApps.length - 1].dtaHorFim
              : "Ativo"
            : "Sem atividade",
          totalAuth: getDataByDateSelected(new Date())
            ? getDataByDateSelected(new Date()).resumoAtividades.tempoAutorizado
            : undefined,
          totalNoAuth: getDataByDateSelected(new Date())
            ? getDataByDateSelected(new Date()).resumoAtividades
                .tempoNaoAutorizado
            : undefined,
          tempoRegistradoSegundos: getDataByDateSelected(new Date())
            ? getDataByDateSelected(new Date()).tempoRegistradoSegundos
            : undefined,
          totalAtiv: getDataByDateSelected(new Date())
            ? getDataByDateSelected(new Date()).tempoAtivoSegundos
            : undefined,
          totalIdling: getDataByDateSelected(new Date())
            ? getDataByDateSelected(new Date()).tempoInativoSegundos
            : undefined,
          percentAuth: getDataByDateSelected(new Date())
            ? getDataByDateSelected(new Date()).resumoAtividades
                .porcentagemAutorizado
            : undefined,
          percentNoAuth: getDataByDateSelected(new Date())
            ? getDataByDateSelected(new Date()).resumoAtividades
                .porcentagemNaoAutorizado
            : undefined,
        };
    }
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
