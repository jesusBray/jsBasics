var modulo = (function(){
    //Variables y métodos privados
    var variablePrivada = "Esto es privado";
    var metodoPrivado = function(argumentoPrivado){
        alert(variablePrivada + " Fecha: " + argumentoPrivado);
    };
    //Devuelve un objeto con lo público
    return {
        variablePublica: "Esto es público",
        metodoPublico: function(argumentoPublico){
            variablePrivada += " (ahora es público a través del método público)";
            metodoPrivado(argumentoPublico);
        }
    };
})();
//modulo();
