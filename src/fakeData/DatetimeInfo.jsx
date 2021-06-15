const timeBetween = (initialTime, finalTime) => {
    var minutesDiff = finalTime.getMinutes() - initialTime.getMinutes()
    var flag = false
    if (minutesDiff < 0) {
        minutesDiff += 60
        flag = !flag
    }
    var hoursDiff = finalTime.getHours() - initialTime.getHours()
    if (flag)
        hoursDiff--

    var textual = ''

    if (hoursDiff > 0) {
        textual += hoursDiff + ' hora'
        textual += (hoursDiff > 1) ? 's ' : ' '
    }

    if (minutesDiff > 0) {
        if (hoursDiff > 0) {
            textual += 'e '
        }
        textual += minutesDiff + ' minuto'
        textual += (minutesDiff > 1) ? 's' : ''
    }

    return textual
}

const secondsBetween = (initialTime, finalTime) => {
    var diff = (finalTime.getHours() - initialTime.getHours()) * 60 * 60
    diff += (finalTime.getMinutes() - initialTime.getMinutes()) * 60
    diff += finalTime.getSeconds() - initialTime.getSeconds()
    return diff
}

export const timeline = []
var tmpaux = "2021-06-01 13:12:01".split(/[- :]/)
var tmpaux2 = "2021-06-01 15:15:16".split(/[- :]/)
timeline.push({
    app: 'Google Chrome',
    initialTime: new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2],
        tmpaux[3], tmpaux[4], tmpaux[5]),
    finalTime: new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2],
        tmpaux2[3], tmpaux2[4], tmpaux2[5]),
    diff: timeBetween(
        (new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])),
        (new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2], tmpaux2[3], tmpaux2[4], tmpaux2[5]))
    ),
    diffMs: secondsBetween(
        (new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])),
        (new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2], tmpaux2[3], tmpaux2[4], tmpaux2[5]))
    ),
    isAuth: true
})
tmpaux = "2021-06-01 15:15:17".split(/[- :]/)
tmpaux2 = "2021-06-01 16:11:20".split(/[- :]/)
timeline.push({
    app: 'VSCode',
    initialTime: new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2],
        tmpaux[3], tmpaux[4], tmpaux[5]),
    finalTime: new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2],
        tmpaux2[3], tmpaux2[4], tmpaux2[5]),
    diff: timeBetween(
        (new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])),
        (new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2], tmpaux2[3], tmpaux2[4], tmpaux2[5]))
    ),
    diffMs: secondsBetween(
        (new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])),
        (new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2], tmpaux2[3], tmpaux2[4], tmpaux2[5]))
    ),
    isAuth: true
})
tmpaux = "2021-06-01 16:11:21".split(/[- :]/)
tmpaux2 = "2021-06-01 16:25:42".split(/[- :]/)
timeline.push({
    app: 'Valorant',
    initialTime: new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2],
        tmpaux[3], tmpaux[4], tmpaux[5]),
    finalTime: new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2],
        tmpaux2[3], tmpaux2[4], tmpaux2[5]),
    diff: timeBetween(
        (new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])),
        (new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2], tmpaux2[3], tmpaux2[4], tmpaux2[5]))
    ),
    diffMs: secondsBetween(
        (new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])),
        (new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2], tmpaux2[3], tmpaux2[4], tmpaux2[5]))
    ),
    isAuth: false
})
tmpaux = "2021-06-01 16:25:21".split(/[- :]/)
tmpaux2 = "2021-06-01 17:13:42".split(/[- :]/)
timeline.push({
    app: 'Google Chrome',
    initialTime: new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2],
        tmpaux[3], tmpaux[4], tmpaux[5]),
    finalTime: new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2],
        tmpaux2[3], tmpaux2[4], tmpaux2[5]),
    diff: timeBetween(
        (new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])),
        (new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2], tmpaux2[3], tmpaux2[4], tmpaux2[5]))
    ),
    diffMs: secondsBetween(
        (new Date(tmpaux[0], tmpaux[1] - 1, tmpaux[2], tmpaux[3], tmpaux[4], tmpaux[5])),
        (new Date(tmpaux2[0], tmpaux2[1] - 1, tmpaux2[2], tmpaux2[3], tmpaux2[4], tmpaux2[5]))
    ),
    isAuth: true
})


export const pessoa = {
    nome: 'Victor Rocha Azevedo',
    status: 'Online',
}

export const tempoAuth = {
    h: 7,
    min: 15,
    s: 46
}
export const tempoNoAuth = {
    h: 7,
    min: 15,
    s: 46
}
export const tempoIdling = {
    h: 7,
    min: 15,
    s: 46
}
export const inicio = {
    h: 7,
    min: 59,
    s: 46
}
export const fim = {
    h: 17,
    min: 32,
    s: 6
}
export const total = {
    h: 9,
    min: 34,
    s: 6
}
export const ativo = {
    h: 8,
    min: 5,
    s: 6
}
export const inativo = {
    h: 1,
    min: 29,
    s: 6
}