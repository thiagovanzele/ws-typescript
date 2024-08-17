import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  public adicionaNegociacao(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  public listarNegociacoes(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}
