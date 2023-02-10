const { from } = require("rxjs")

const notas = [6.7, 6.1, 7.5 , 4.9, 9.8, 7]

const observable1 = from(notas)

observable1.subscribe(nota => {
    console.log(nota)
})