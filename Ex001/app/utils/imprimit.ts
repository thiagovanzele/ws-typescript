import { ParaTexto } from "../interfaces/para-texto.js";

export function imprimir(...objetos: ParaTexto[]) {
    objetos.forEach(obj => obj.paraTexto());
}