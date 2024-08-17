import { DiaDaSeamana } from "../enums/dia-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoes-view", true);
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.validaData(negociacao)) {
            return;
        }
        this.negociacoes.adicionaNegociacao(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "0";
        this.inputValor.value = "0.00";
        this.inputData.focus();
    }
    atualizaView() {
        this.mensagemView.update("Negociação adicionada com sucesso");
        this.negociacoesView.update(this.negociacoes);
        const mensagemElement = document.querySelector("#mensagemView");
        this.limpaElemento(mensagemElement);
    }
    validaData(negociacao) {
        if (negociacao.data.getDay() === DiaDaSeamana.DOMINGO ||
            negociacao.data.getDay() === DiaDaSeamana.SABADO) {
            this.mensagemView.update("Data inválida");
            const mensagemElement = document.querySelector("#mensagemView p");
            mensagemElement.classList.remove("alert-success");
            mensagemElement.classList.add("alert-danger");
            this.limpaElemento(mensagemElement);
            return false;
        }
        else {
            return true;
        }
    }
    limpaElemento(elemento) {
        setTimeout(() => {
            elemento.textContent = "";
            elemento.classList.remove("alert", "alert-danger", "alert-success");
        }, 2000);
    }
}
