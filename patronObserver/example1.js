
function Observable(params) {
    return params;
}

observador = {
    vec: [],
    subcribe: function(observable) {
        console.log("Se a adicionado a ", observable);
        this.vec.push(observable);
    },
    unsubcribe: function(observable) {
        this.vec.filter(algo =>{
            console.log("Se a eliminado a ", observable);
            algo !== observable;
        });
    }
}

x = function (id) {
        return id;
    }


// console.log(observable.id(123));
console.log(a + x(2));


// observador.subcribe(observable.id(123));