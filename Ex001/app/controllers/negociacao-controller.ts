import { DiaDaSeamana } from "../enums/dia-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes: Negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoes-view", true);
  private mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this.inputData = document.querySelector("#data") as HTMLInputElement;
    this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
    this.inputValor = document.querySelector("#valor") as HTMLInputElement;
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = Negociacao.criaNegociacao(
        this.inputData.value, 
        this.inputQuantidade.value, 
        this.inputValor.value);

    if (!this.validaData(negociacao)) {
      return;
    }

    this.negociacoes.adicionaNegociacao(negociacao);
    this.atualizaView();
    this.limparFormulario();
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "0";
    this.inputValor.value = "0.00";
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.mensagemView.update("Negociação adicionada com sucesso");
    this.negociacoesView.update(this.negociacoes);
    const mensagemElement = document.querySelector("#mensagemView") as HTMLElement;

    this.limpaElemento(mensagemElement);
  }

  private validaData(negociacao: Negociacao): boolean {
    if (
      negociacao.data.getDay() === DiaDaSeamana.DOMINGO ||
      negociacao.data.getDay() === DiaDaSeamana.SABADO
    ) {
      this.mensagemView.update("Data inválida");
      const mensagemElement = document.querySelector("#mensagemView p") as HTMLElement;
      mensagemElement.classList.remove("alert-success");
      mensagemElement.classList.add("alert-danger");
      this.limpaElemento(mensagemElement);
      return false;
    } else {
      return true;
    }
  }

  private limpaElemento(elemento: Element): void {
    setTimeout(() => {
      elemento.textContent = "";
      elemento.classList.remove("alert", "alert-danger", "alert-success");
    }, 2000);
  }
}
