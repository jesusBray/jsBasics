var loop1 = setTimeout(function(){
    document.write("dia\n");
},2000);
var loop2 = setTimeout(function(){
    document.write("tarde\n");
},4000);
var loop3 = setTimeout(function(){
    document.write("noche\n");
},6000);

function pedirNombre(callback){
    callback(prompt('digite su nombre: '));
}
//aqui se esta llamando se esperara a 6 seg
pedirNombre(function(name){
    alert('hola: '+name);
});

var algo = function otroCall(name,callback){
    var varAlgo = function(){
        prompt('digite su nombre: ');
    }
    alert('hola: '+name);
    callback(varAlgo);
}

otroCall(name,function(name){
    
});

