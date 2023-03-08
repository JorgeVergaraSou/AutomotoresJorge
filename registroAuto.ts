import { log } from "console";
import { Auto } from "./autos";
import * as fs from "fs";

export class RegistroAutomotor{

    insertar(auto: Auto, array: Auto[]){
        if(array.push(auto)){
            console.log('Se ha añadido ', auto.marca, ' a la base de datos', array);
            fs.writeFileSync("./bodega.json", JSON.stringify(array)); 
            fs.appendFileSync("./bitacora.txt", `FUNCION INSERTAR: Se modifico el Stock se agrego ${ auto.marca} \n`);
        } else{
            console.log('El Auto', auto.marca, ' No se ha podido añadir a la concesionaria');   
            fs.appendFileSync("./bitacora.txt", `FUNCION INSERTAR: no se pudo agregar ${ auto.marca} \n`);       
        }
    }

    consultar(marca: string, array: Auto[]){
        const autoEncontrado = array.find(auto => auto.marca === marca )
        if(autoEncontrado){
            console.log(marca, ' Existe en la concesionaria', autoEncontrado)
            fs.appendFileSync("./bitacora.txt", `FUNCION CONSULTAR: Existe el vehiculo marca: ${ marca} \n`);
            return autoEncontrado
        } else{
            console.log(marca, ' No existe en la concesionaria');
            fs.appendFileSync("./bitacora.txt", `FUNCION CONSULTAR: El vehiculo marca:  ${ marca} no existe en la BD \n`);
        }
    }
    /*
    modificar(marca: string, array: Auto[], dato: string){

        const autoEncontrado = array.findIndex(auto => auto.marca == marca);
        if(autoEncontrado >= 0){  


            array.splice(autoEncontrado, 1)
            console.log('Auto eliminado', marca);
            fs.writeFileSync("./bodega.json", JSON.stringify(array));
            fs.appendFileSync("./bitacora.txt", `FUNCION ELIMINAR: Se elimino el vehiculo ${marca}  \n`);
            return array;
        } else {

         console.log('Auto ', marca, 'no ha sido eliminado');
         fs.appendFileSync("./bitacora.txt", `FUNCION ELIMINAR: No se quito el vehiculo ${marca}  \n`);
        }
    }
*/
    eliminar(marca: string, array: Auto[]): any {
        const autoEncontrado = array.findIndex(auto => auto.marca == marca);
        if(autoEncontrado >= 0){  
            array.splice(autoEncontrado, 1)
            console.log('Auto eliminado', marca);
            fs.writeFileSync("./bodega.json", JSON.stringify(array));
            fs.appendFileSync("./bitacora.txt", `FUNCION ELIMINAR: Se elimino el vehiculo ${marca}  \n`);
            return array;
        } else {

         console.log('Auto ', marca, 'no ha sido eliminado');
         fs.appendFileSync("./bitacora.txt", `FUNCION ELIMINAR: No se quito el vehiculo ${marca}  \n`);
        }
    }
}