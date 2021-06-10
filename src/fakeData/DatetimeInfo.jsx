export const timeline = []
const tmpaux = "2021-06-10 13:12:01"
const tmpaux2 = "2021-06-10 15:15:16"
timeline.push({
    app: 'Google Chrome',
    initialTime: new Date(Date.UTC(tmpaux[0], tmpaux[1]-1, tmpaux[2],
        tmpaux[3], tmpaux[4], tmpaux[5])),
    finalTime: new Date(Date.UTC(tmpaux2[0], tmpaux2[1]-1, tmpaux2[2],
        tmpaux2[3], tmpaux2[4], tmpaux2[5])),
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