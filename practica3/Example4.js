
['goku','conan','sasori','nagato'].forEach((name,index) => {
    console.log(index+" - "+name);
});

var allUssers = [];

function logStuff(data) {
    if('string'==typeof data)
        return console.log(data);
    if('objet'==typeof data)
        for(var key in data){
            console.log();
        }    
}
function getInput(input,callback) {
    allUssers.push(input);

    callback(input);
}

getInput({user:'user1', speciality:''},logStuff);
