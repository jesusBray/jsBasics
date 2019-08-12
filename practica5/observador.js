// const subjet = {
//     observers = [],

//     attach:function(observer){
//         this.observers.push(observer);
//     },

//     detach:function(observer){
//         const index = this.observers.indexOf(observer);
//         if(index > -1){
//             this.observers.splice
//         }
//     }


// }



// let vec = [
//     'enero','febrero','junio'
// ];
// var delet = vec.slice(2,1);
// console.log(delet);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
fruits.forEach((e) => {
    console.log(e);
    
});
