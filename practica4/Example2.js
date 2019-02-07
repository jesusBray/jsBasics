
let person = {
    fullName:function(city, country){
        return console.log(`Name: ${this.name}, LastName: ${this.lastName}, City: ${city}, Country: ${country}`);
    }
}

let datosPersonales = {
    name:'jesus',
    lastName:'paye'
}

person.fullName.call(datosPersonales,"La Paz","Bolivia!");

