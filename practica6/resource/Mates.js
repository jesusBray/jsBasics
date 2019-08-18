
class Mates{
    static getMates(){
        const matePromise = new Promise((resolve, reject) => {
            const dato = [
                {name: 'Jesus', age: 22},
                {name: 'Robeth', age: 25}
            ]
            resolve(dato);
        });
        return matePromise;
    }
}
module.exports = Mates;