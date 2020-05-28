import {
    LitElement,
    TemplateResult,
    html,
    property,
} from 'lit-element';

export default class ObjectGrid extends LitElement {
    @property() data: object;

    protected createRenderRoot(): Element {
        return this;
    }

    render(): TemplateResult {
        return html``;
    }
}
