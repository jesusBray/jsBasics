function Persona(){
    this.name='jesus'
    this.lastName= 'paye',
    this.age = 22
};

Persona.prototype.imprimirDatos = function(){
    console.log(this.name+" "+this.lastName+" "+this.age);
}

Persona.prototype = direccion = "La Paz";

var per = new Persona();
console.log(per);
// console.log(per.imprecionDatos());
