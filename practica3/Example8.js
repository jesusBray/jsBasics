let objeto= {

    person:function (generic){
        if(generic=='varon'){
            return function(){
                let rasgosFisicos={
                    name:'ron',
                    colorOjos:'cafes',
                    colorPiel:'blanco'

                }
            };
        }else if(generic=='mujer'){

        }else{
            console.log("error dato no valido");
        }
    },
    animal:'conejo',
    otro:'bacteria'
}
