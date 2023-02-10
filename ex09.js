const { Observable } = require("rxjs")
const axios = require("axios")

function httpGET(url){
    return new Observable(subscriber => { // subscriber = assinante
        axios.get(url)
            .then(resp => subscriber.next(resp.data))
            .then(() => subscriber.complete())
    })
}

httpGET("http://localhost:3001/films")
    .subscribe(dado => console.log(dado))