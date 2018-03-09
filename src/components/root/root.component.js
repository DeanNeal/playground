import {Component, Router, Http, Decorators} from '@dean_neal/core';
import Tpl from './root.component.html';


@Decorators.ComponentDecorator({
    selector: 'app-root',
    template: Tpl
})


export class RootComponent {
    constructor(params) {

    }

    onInit() {
		// Http.getCatalog('/catalog');
    }
}
