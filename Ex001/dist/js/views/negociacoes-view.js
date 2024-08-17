import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
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
                        `;
        }).join('')}
                </tbody>
            </table>

        `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
