import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
  public static obterNegociacoesDoDia(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((resp) => resp.json())
      .then((dados: Array<NegociacoesDoDia>) => {
        return dados.map((dadosDeHoje) => {
          return new Negociacao(
            new Date(),
            dadosDeHoje.vezes,
            dadosDeHoje.montante
          );
        });
      });
  }
}
