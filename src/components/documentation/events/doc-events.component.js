import { Component, Decorators, FormGroup, Validators } from '@dean_neal/core';
import Tpl from './doc-events.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-documentation-events',
    template: Tpl,
    props: ()=>{
    	return {
    		
    	}
    }
})
export class DocEventsComponent {

}