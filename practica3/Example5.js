
function saludar(callback){
    callback(prompt('Dame tu nombre: '));
}

function nombre(name){
    alert('Hola: '+name);
}


saludar(nombre);