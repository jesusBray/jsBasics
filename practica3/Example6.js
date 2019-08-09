
function callback(a) {
    if(a=="pollo"){
        return true;
    }
    else{
        return false;
    }
}

(function comer(comida,callback){
    console.info(callback(comida));
})(prompt("Digite el plato de comida: "),callback);
