
var datoEntrante = 10;
function operacio (a,b){
    console.log(a+b);
}

//operacio(10);
function crearFuncion(){
    var arr=[];
    let numero=1;
    for (let numero = 1; numero <= 5; numero++) {
        arr.push(
            (function(){
                return function(){
                    console.log(numero);
                }
            })(numero)      
        );        
    }
    return arr;
}
let func = crearFuncion();

func[0]();
func[1]();
func[2]();
func[3]();