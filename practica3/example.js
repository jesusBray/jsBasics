
(function(){
    function getUssers(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("ussers are ready!");
                resolve();
            },100)
        })
    }
    function getProjects(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("Project are ready!");
                resolve("dato1");
            },400);
        });
    }
    function getIssues(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("Issues are ready!");
                reject();
            },800);
        });
    }
    getProjects()
    .then(function(response){
        console.log(response);
        throw "error dato invalido";
        return getUssers();
    })
    .then(getIssues)
    .catch(function(err){
        console.error("error!!!",err);
    })
})();

//una promesa es un objeto o una funcion 
//debe de tener el metodo then
//debe de tener thenable, thenable contiene el objeto then
//en una promesa puede manipular los response/valor puede ser undefined thenable o promise