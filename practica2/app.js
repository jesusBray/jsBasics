console.warn("alerta");
console.log("imprecion");
console.error("error");
console.log("imprecion de diferentes icons");
function HaciendoClic(){
    console.warn("buen dia");
}

var persona = {
    nombre:'Rick',
    edad:25,
    RasgosFisicos:{
        colorPiel:'morena',
        ojos:'cafe',
    },
};

// //console.log(persona[campo]);

function imprimir(nombre){
    //console.log(nombre);
}

function imprecionDatos(persona){
    console.log(persona.nombre);
}

// imprecionDatos({nombre:'jesus',apellido:'paye'});

function numerondomico(){
    return Math.random();
}

function resultBoolean(numerondomico){
    if (numerondomico>0.5) {
        return true;
    }
    else{
        return false;
    }
}

//console.log(resultBoolean(numerondomico()));

function creaFunction(){
    return function(nombre){
        console.log("me creo: "+nombre);
        return function (){
            console.log("se ha creado una tersera funcion!");
        }
    }
}

// var dato1 = creaFunction();
// //dato1(persona.nombre);
// var dato2 = dato1(persona.nombre);
// //dato2();

function primeraFuncion(){
    return function(datoEntrante){
        console.log("se encuentra en la segunda funcion!"+" "+datoEntrante);
        return function(dato1){
            console.log("se encuentra en la tercera funcion!");
        }
    }
}

// var ejePrimeraFuncion = primeraFuncion();

// var ejeSegudaFuncion = ejePrimeraFuncion("ingrsando un dato!");

//ejeSegudaFuncion("ingrsando dato!");

// Mongo.Connect().then(function(){
//     return Mongo.Start();
//     })
//     .then(function(){
//         return Mongo.getConfig();
//     })
//     .then(function (Config){
//     Console.log(config);
//     })
//     .catch(function(ERR){
//     console.log(ERR);
//     });

let Mongo = {
    nombre:'jesus',
    apellido:'paye',
    Connect: function(){
        return {
            caracteristica:'caracteristica1',
            carcteristicaPrincipal:'caracteristica principal',
            Start:function(){
                console.log("Start");
            }
        }
    }
}
    
//Mongo.Connect().Start();


function Jugador(nombre){
    this.nombre=nombre;
    this.pv=100;
    this.ps=100;

    this.curar = function(jugadorObjetivo){
        if(this.ps>=40){
            this.ps-=40;
            jugadorObjetivo.pv+=20;
        }else{
            console.log("no tiene ps");
        }
        this.estado(jugadorObjetivo);
    }
    this.estado = function(jugadorObjetivo){
        console.log(this)
        console.log(jugadorObjetivo);
    }
}


var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");

console.log(gandalf);
console.log(legolas);

gandalf.curar(legolas);
