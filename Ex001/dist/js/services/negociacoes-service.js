import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    static obterNegociacoesDoDia() {
        return fetch("http://localhost:8080/dados")
            .then((resp) => resp.json())
            .then((dados) => {
            return dados.map((dadosDeHoje) => {
                return new Negociacao(new Date(), dadosDeHoje.vezes, dadosDeHoje.montante);
            });
        });
    }
}
