import { Auto } from "./autos";
import { RegistroAutomotor } from "./registroAuto";
import * as fs from "fs";

const informacion = fs.readFileSync("./bodega.json", "utf8");
const cansao = JSON.parse(informacion);
//console.log(Datos);
var vendedor = new RegistroAutomotor;
var berme = new Auto ("toyota", "milano", "gasoil");
   // console.log(berme);



vendedor.insertar(berme, cansao )