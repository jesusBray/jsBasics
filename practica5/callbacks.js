/*
function persona(name, comer){
    console.log(`la persona  ${comer('pescado')}`);
}

persona("pollo", function(platillo){
    return `esta comiendo ${platillo}`;
});

*/



function getUsser(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("ejecutando getUssers");
            resolve();
        },8000);
    });    
};

function getIssues(){
    return new Promise(function(reject, resolve){
        setTimeout(() => {
            console.log('ejecutando getIssues');
        }, 1000);
    });
}

function getLooger(){
    return new Promise(function(reject, resolve){
        setTimeout(() => {
            console.log('ejecutando getIssues');
        }, 2000);
    });
}
getLooger().then(getIssues).then(getUsser);