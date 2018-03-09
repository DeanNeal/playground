import {Component, Router, Decorators} from '@dean_neal/core';
import Tpl from './header.component.html';


@Decorators.ComponentDecorator({
    selector: 'app-header',
    template: Tpl
})
export class HeaderComponent {
    constructor(root) {

    }

    onInit() {
       
    }

    onDestroy() {

    }

    test(e) {
    	
    }

    keyup() {
        console.log(1);
    }
}