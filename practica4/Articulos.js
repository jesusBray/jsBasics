
class Articulos{
    constructor(){
        this.articulos = ['manaza','pera'];
        this.subscriptores = [];
    }

    agregarArticulos(nameArticulo){
        this.articulos.push(nameArticulo);
    }

    agregarSubscriptor(callback){
        this.subscriptores.push(callback);
    }

    notificarSubscriptores(){
        this.subscriptores.forEach(subscriptor => {
            subscriptor(this.ordenes);
        });
    }
}

const articulos = new Articulos();

class Vista{
    constructor(){
        articulos.agregarSubscriptor(this.render);
    }

    render(articulos){
        document.querySelector('url').innerHTML= articulos
            .map((articulo) => `<div>${articulo}</div>`)
            .join('');
    }


}
