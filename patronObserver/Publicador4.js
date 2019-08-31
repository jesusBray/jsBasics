

class Publicador4{
    constructor(){
        this.subscrito = ['roberto','romulo'];
    }

    subscribir(subscriptor){
        this.subscrito.push(subscriptor);
        console.log("Usuario: "+subscriptor+" ahora esta subscrito! ");
    }

    eliminarSubscripcion(subscriptor){
        this.subscrito = this.subscrito.filter(user => user!==subscriptor);
        console.log("Se a elimiado un subscriptor: "+ subscriptor);
        
    }
    
    notificar(evento){
        this.subscrito.forEach(usuario => {
            usuario(usuario, evento)
            console.log();
            
        });
    }
    

}
const user = new Publicador4();
user.subscribir("jorge");

user.eliminarSubscripcion("roberto");
user.notificar("Nueva notification");