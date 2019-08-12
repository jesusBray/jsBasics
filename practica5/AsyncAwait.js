const fetch = require('node-fetch');

async function getUsser(){
    const url = 'https://api.github.com/users/jesusBray';
    const response = await fetch(url);
    const json = await response.json();

    if(response.status !== 200){
         throw Error('the usser is not exist!!');
    }
    return json; 
}

// (async function(){
//     try{
//         const nameGU = await getUsser('river');
//         console.log(nameGU);
//     }catch(error){
//         console.log(`Error ${error}`);
//     }
// })();
(async function(){
    try{
        const dat = await getUsser();
        console.log(dat);
    }catch(err){
        console.log(`Error ${err}`);
    }
})();


