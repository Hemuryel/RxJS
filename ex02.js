const { Observable } = require("rxjs")

const observable1 = Observable.create(subscriber => {
    subscriber.next("RxJS") // gera dado
    subscriber.next("é")
    subscriber.next("muito")

    setTimeout(() => {
        subscriber.next("legal")
        subscriber.complete()
    }, 3000)
})

observable1.subscribe(texto =>{
    console.log(texto)
})