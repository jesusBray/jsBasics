const subject = {
    observers:[],
    attach:function(observador){
        this.observers.push(observador);
    },
    dettacha:function(observador){
        this.observers = this.observers.filter((item)=> item==observador);
    },

    notify:function(context) {
        this.observers.forEach(observer => {
            observer.call(this,context);
        });
    }
};

const observador = {
    update:function(constext){
        console.log(constext);
    }
};

function extend(child,parent) {
    child = child || {};
    for (const prop of parent) {
        if (parent.hasOwnProperty(prop)) {
            child[prop] = parent[prop]; 
        }
    }
    return child;
}

let addButton = document.querySelector('#add');
let control = document.querySelector('#control');
let container = document.querySelector('#container');

concreteSubject = extend(control, subject);

concreteSubject.addEventListener('click', function (e) {
    this.notify(this.checked);
  })