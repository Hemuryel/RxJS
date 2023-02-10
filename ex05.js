const { from } = require("rxjs")
const { map } = require("rxjs/operators")

const notas = [6.7, 6.1, 7.5 , 4.9, 9.8, 7]

const observable1 = 
    from(notas)
        .pipe(
            map(nota => nota >= 7 ? "Aprovado" : "Reprovado")
        )
        .subscribe(status => {
            console.log(status)
        })