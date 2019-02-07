

class Publicador{

    constructor(){
        this.subscriptor=[];
    }

    subscribe(subscriptor){
        this.subscriptor.push(subscriptor);
    }

    unsubscriptores(subscriptor){
        this.subscriptor = this.subscriptor.filter(item => {
            item!== subscriptor;
        })
    }

    notify(event){
        this.subscriptor.forEach(element => {
            element.call(this,event);
        });
        
    }
}