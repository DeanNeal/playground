import {Component, Decorators, Observable} from '@dean_neal/core';
import Tpl from './doc-smart-object.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-documentation-smart-object',
    template: Tpl
})
export class DocSmartObjectComponent  {
    constructor(params) {

    }

    onInit() {
    	let a =  new Observable([]);

    	a.sub(res=> {
			console.log(res);
    	});
    	a.set('dsfdsf');
    	
    }

    onDestroy() {

    }
}