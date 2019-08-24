// import { resolve } from "dns";
// import { rejects } from "assert";

// const a = {
//     name:'jesus',
//     lastName:'paye'
// };
// console.log(a);

// function isNumeric(numero) {
//     if(!isNaN(parseFloat(numero)) && isFinite(numero)){
//         return console.log("is numeric");
//     }else{
//         return console.log("not is numeric");
//     };
// }

const fun= function(num,done){
    console.log('1');
    setTimeout(()=>{
        const partialResult= num+2;
        console.log('2');
        done(partialResult);
    },1000);
    console.log('3');
}

fun(5,function(result){
    console.log('4');
    console.log('with callback:',result);
})

const fun1 = function(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            const partialResult = num*2;
            if(partialResult>20){
                reject('the partial is > 20')
            }else{
                resolve(partialResult);
            }
        },1000);
    });
}
fun1(15)
.then((result1)=>{
    console.log("with promises: ",result1);
    return fun1(4);
})
.then((result2)=>{
    console.log('with promices',result2);
})
.catch((error)=>{
    console.log("error",error)});