// (function method(){
//     let n = 5;
//     let a = n-1;
//     n*=n;
//     a*=a
//     let r = n+a;
//     return console.log("Resultado: "+r);
// })();

////example 6
// console.log((function(vec){
//     let aux;
//     for (let j = 0; j < vec.length-1; j++) {
//         for (let i = 0; i < vec.length; i++) {
//             if (vec[i] > vec[i+1]) {
//                 aux=vec[i];
//                 vec[i]=vec[i+1];
//                 vec[i+1]=aux;
//             }            
//         }
//     }

//     let cont=0,total=0;
//     for (let i = 0; i < vec.length; i++) {
//         cont+=vec[i];
//     }
//     console.log(cont);
    
//     total = vec[vec.length]-cont;
//     //console.log(total);
//     return cont;
// })([0,3]));


// function makeArrayConsecutive2(vec) {
//     let aux;
//     for (let j = 0; j < vec.length-1; j++) {
//         for (let i = 0; i < vec.length; i++) {
//             if (vec[i] > vec[i+1]) {
//                 aux=vec[i];
//                 vec[i]=vec[i+1];
//                 vec[i+1]=aux;
//             }
//         }
//     }
//     return vec[vec.length-1]-vec[0] - (vec.length-1);
// }
// console.log(makeArrayConsecutive2([1]));

///example 7 ----

console.log((function(vec){
    let cont=0;
    for (let i = 0; i < vec.length-1; i++) {
        if (vec[i]>vec[i+1]) {
            cont++; 
        }
        if (cont>1) {
            return false;
        }
    }
    return true;

})([1,2,3,1,1]));



