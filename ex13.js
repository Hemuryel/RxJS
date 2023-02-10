const { Observable } = require("rxjs")
const { map } = require("rxjs/operators")
const axios = require("axios")

function httpGET(url){
    return new Observable(subscriber => { // subscriber = assinante
        axios.get(url)
            .then(resp => {
                if (Array.isArray(resp.data)){
                    resp.data.forEach(element => {
                        subscriber.next(element)
                    });
                } else {
                    subscriber.next(resp.data)
                }
            })
            .then(() => subscriber.complete())
    })
}

httpGET("http://localhost:3001/films")
    .pipe(
        map(film => film.Actors),
        map(actorString => actorString.split("\s*,\s*")) // transforma em array, \s* remove espaço em branco
    )
    .subscribe(actorsArray => console.log(actorsArray))