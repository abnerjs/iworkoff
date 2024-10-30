export function setTypeOfAnalytics(n) {
    return {
        type: 'TYPEOF_ANALYTICS_SELECTION_SETTED',
        payload: n === 0 ? 'Diário' : 
            n === 1 ? 'Semanal' : 'Mensal',
    }
}
