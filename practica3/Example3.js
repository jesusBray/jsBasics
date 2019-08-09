let carro = {
    color:'rojo',
    marca:'chino',
    ruedas:'3',
    imprimirDatos:function () {        
        return "Color: "+this.color+" Marca: "+this.marca+" Ruedas: "+this.ruedas;

    }
}

carro.imprimirDatos();

let otrosDatos = function(){
    console.info("imprimiendo datos de la funcion otrosDatos");
    console.log(this.imprimirDatos());
    
}

let asd = otrosDatos.bind(carro);

asd();