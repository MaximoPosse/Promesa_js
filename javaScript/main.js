import {Usuarios} from './arrays.js'

function buscar(){
    return new Promise((resolve,reject)=>{ 
        if(Usuarios==0){
            reject(new Error('Api no encontrada'));
        }
        // Luego de 3s mostramos el arrays
        setTimeout(() => {
            resolve(Usuarios)
        },3000);

    })
}
console.log('🍙Buscando. . .')
buscar()
.then((response)=> {
    console.log("Arrays encontrado", response)
})
.catch((Error)=> { 
        console.log("Error en:", Error)
    }
)