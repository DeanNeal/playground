import { Component, Decorators} from '@dean_neal/core';
import Tpl from './doc-component.component.html';
// import ProjectsStore from 'store/projects.store';

@Decorators.ComponentDecorator({
    selector: 'app-documentation-component',
    template: Tpl
})
export class DocComponentComponent {
    constructor(params) {

    }

    onInit() {

    }

    onDestroy() {

    }
}