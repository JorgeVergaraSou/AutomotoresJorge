import { Auto } from "./autos";
import { RegistroAutomotor } from "./registroAuto";
import * as fs from "fs";

/* se lee archivo JSON y se asigna a una variable*/
const informacion = fs.readFileSync("./bodega.json", "utf8"); 

//se parsea la informacion del archivo
const cansao = JSON.parse(informacion);

// se crea una instancia de la clase
const vendedor = new RegistroAutomotor;

/* en esta linea se crea un nuevo dato para insertar */
const berme = new Auto ("CHEVY", "500", "GASOIL"); 

/* en esta variable se ingresa la marca de auto a usar en las distintas funciones */
const datoConsultas = "CHEVY"; 

//const nuevoNombre = "nisato";


/* PARA USAR ALGUNA FUNCION, DESCOMENTAR LA LINEA DESEADA Y COMENTAR EL RESTO */

//vendedor.insertar(berme, cansao );

//vendedor.consultar(datoConsultas, cansao);

//EN CONSTRUCCION
//vendedor.modificar(datoConsultas, cansao, nuevoNombre);

//vendedor.eliminar(datoConsultas, cansao);