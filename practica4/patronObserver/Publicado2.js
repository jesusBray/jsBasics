class Pubclicador2{


    constructor(){
        this.subscriptors=[];
    }

    subscribe(subscriptor){
        this.subscriptors.push(subscriptor);
    }

    unsubscribe(subscriptor){
        this.subscriptors = this.subscriptors.filter(function(user){
            user == subscriptor;
        });
    }

    notify(event){
        this.subscriptors.forEach(element => {
            element.call(this, event);
        });
        
    }

}