
function comida(name){
    if(name=="pollo"){
        return true;
    }
    else{
        return false;
    }
}

let persona={
    reir:'riendo(ja ja ja)',
    comer:function(name){
        if(name=="pollo"){
            return true;
        }
        else{
            return false;
        }
    },
    jugar:'futbol',
    dormir:'domir'
}

console.log(persona.comer(prompt("Digite su comida")));