function Persona(){
    this.name='jesus'
    this.lastName= 'paye',
    this.age = 22
};

Persona.prototype.imprimirDatos = function(){
    return "Name: "+this.name+" Last Name: "+this.lastName+" Age: "+this.age;
}

Persona.prototype.direccion = "La Paz";

var per = new Persona();
console.log(per.imprimirDatos());

//console.log(per.direccion);


 function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  var myFather = new Person("John", "Doe", 50, "blue");
  Person.prototype.nationality = "English";
  
  //console.log(myFather.nationality);

  