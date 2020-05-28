import {
    LitElement,
    TemplateResult,
    html,
    property,
} from 'lit-element';
import ObjectGrid from './objectgrid';
import SimpleObject from './simpleobject';

export default class GridTree extends LitElement {
    @property() data: object;

    render(): TemplateResult {
        return html``;
    }
}
