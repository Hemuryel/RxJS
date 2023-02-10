const { Observable } = require("rxjs")

const observable1 = Observable.create(subscriber => {
    subscriber.next("RxJS") // gera dado
    subscriber.next("é")
    subscriber.next("muito")
    subscriber.next("legal")
    
    //50% chance de entrar
    if (Math.random() > 0.5) {

    } else {
        throw "Eita!!!!"
    }

    setTimeout(() => {
        subscriber.complete()
    }, 3000)
})

observable1.subscribe(
    texto => console.log(texto),
    err => console.log(err),
    () => console.log("fim!")
)