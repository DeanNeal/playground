import { Component, Decorators} from '@dean_neal/core';
import Tpl from './doc-lifecycle.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-documentation-lifecycle',
    template: Tpl
})
export class DocLifecycleComponent {
    constructor(params) {

    }

    onInit() {

    }

    onDestroy() {

    }
}