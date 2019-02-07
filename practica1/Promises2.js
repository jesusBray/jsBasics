

function fun(){
    function getDatos(){
        return new Promise(function(reject,resolve){
            setTimeout(function(){
                resolve(console.log("Digitando sus dados!"));
            },4000);
        });
    }

    function getIssues(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve(console.log("getIssues"));
            },1000);
        });
    }

    function getProjects(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("Project are ready!");
                resolve(console.log("getProject"));
            },400);
        });
    }

    getProjects().then(getIssues).then(getDatos).catch(function(err){
        console.error("error!!!",err);
    });

};
fun();
    
