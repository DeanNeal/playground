import {Component, Decorators} from '@dean_neal/core';
import Tpl from './custom-directives.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-documentation-custom-directives',
    template: Tpl,
    props: () => {
        return {
            test: 'test',
            show: true
        }
    }
})
export class DocCustomDirectivesComponent {
    constructor(params) {

    }

    onInit() {

    }
}