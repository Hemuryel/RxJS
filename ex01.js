const { interval } = require("rxjs")

const observable1 = interval(1000) // stream de dados = gera números a cada 1 segundo

const subscription1 = observable1.subscribe(num => {
    console.log(num * 100)
})

const subscription2 = observable1.subscribe(num => {
    console.log(num * 100)
})

// setTimeout(() => {
//     subscription1.unsubscribe();
//     subscription2.unsubscribe();
// }, 6000)