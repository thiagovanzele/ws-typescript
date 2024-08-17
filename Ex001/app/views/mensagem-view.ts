import { View } from "./view.js";

export class MensagemView extends View<String> {

    protected template(model: string): string {
        return `
            <p class="alert alert-success">${model}</p>     
        `
    }

}