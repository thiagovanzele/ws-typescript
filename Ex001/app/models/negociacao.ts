export class Negociacao {
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
}
