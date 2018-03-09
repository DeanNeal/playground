import { Component, Decorators } from '@dean_neal/core';

@Decorators.ComponentDecorator({
    selector: 'app-example-child',
    template: 'Child component <button @click="trigger">Emit \'change\' event </button>'
})
export class ExampleChildComponent {
    constructor(params) {

    }

    onInit() {

    }

    trigger() {
    	this.emit('onChange');
    }

}