import { escapar } from "../decorators/escapar.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";


export class NegociacoesView extends View<Negociacoes> {

    @escapar()
    protected template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th class="text-light">DATA</th>
                        <th class="text-light">QUANTIDADE</th>
                        <th class="text-light">VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.listarNegociacoes().map(negociacao => {
                        return `
                            <tr>
                                <td class="text-warning ">${this.formatar(negociacao.data)}</td>
                                <td class="text-warning ">${negociacao.quantidade}</td>
                                <td class="text-warning ">${negociacao.valor}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>

        `
    }

    private formatar(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }
}