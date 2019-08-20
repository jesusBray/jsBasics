(function(){
    function getLogin(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("Start getLogin! ");
                resolve();
            },500);
        });
    }
    function getAutentication(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("Start getAutentication!");
                resolve([1,2,3,4]);
            },900);
        });
    }
    function getIssues(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                console.log("Start getIssues! ");
                resolve();
            }, 100);
        });
    }
    getLogin()
    throw "error en getLogin"
    .then(function(response){
        console.log(response);
        return getAutentication();
    })
    .then(function(response){
        console.log(response);
        return getIssues();
    })
    .catch(function(err){
        console.error(err);
    });
})();