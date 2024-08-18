import { Comparavel } from "../interfaces/comparavel.js";
import { ParaTexto } from "../interfaces/para-texto.js";

export class Negociacao implements ParaTexto, Comparavel {
  constructor(
    private _data: Date,
    private _quantidade: number,
    private _valor: number
  ) {}


  public get data(): Date {
    const dataCopia = new Date(this._data.getTime());
    return dataCopia;
  }

  public get quantidade(): number {
    return this._quantidade;
  }

  public get valor(): number {
    return this._valor;
  }

  public get volume(): number {
    return this._quantidade * this._valor;
  }

  public static criaNegociacao(dataString: string, quantidadeString: string, valorString: string) {
    const exp: RegExp = /-/g;
    const data = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(data, quantidade, valor);
  }

  public ehIgual(negociacao: Negociacao): boolean {
    return this.data.getDate() === negociacao.data.getDate()
        && this.data.getMonth() === negociacao.data.getMonth()
        && this.data.getFullYear() === negociacao.data.getFullYear()
  }
    
  public paraTexto(): void {
    console.log(`
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor}
      `);
  }
}
