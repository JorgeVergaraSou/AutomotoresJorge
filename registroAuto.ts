import { Auto } from "./autos";
import * as fs from "fs";

export class RegistroAutomotor{

    insertar(auto: Auto, array: Auto[]){
        if(array.push(auto)){
            console.log('Se ha añadido ', auto.marca, ' a la base de datos', array);
            fs.writeFileSync("./bodega.json", JSON.stringify(array)); 
        } else{
            console.log('El Auto', auto.marca, ' No se ha podido añadir a la concesionaria');
            
        }
    }

    consultar(marca: string, array: Auto[]){
        const autoEncontrado = array.find(auto => auto.marca === marca )
        if(autoEncontrado){
            console.log(marca, ' Existe en la concesionaria', autoEncontrado)
            return autoEncontrado
        } else{
            console.log(marca, ' No existe en la concesionaria');
            
        }
    }

    modificar(marca: string, array: Auto[], dato: string){
        const autoModificar = this.consultar(marca, array)
        if(autoModificar){
            autoModificar.marca = dato;
            console.log('El Auto', marca, ' Ha sido modificado y ahora se llama ', dato);
        }
        else {
            console.log('El Auto no se ha podido modificar');
            
        }
        
    }

    eliminar(marca: string, array: Auto[]): any {
        const autoEncontrado = array.findIndex(auto => auto.marca == marca);
        if(autoEncontrado >= 0){  
            array.splice(autoEncontrado, 1)
            console.log('Auto eliminado', marca);
            console.log(array);
            return array;
        } else {

         console.log('Auto ', marca, 'no ha sido eliminado');
        }
    }
}