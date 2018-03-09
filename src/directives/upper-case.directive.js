import {Decorators} from '@dean_neal/core';

@Decorators.DirectiveDecorator({
    selector: 'upperCase'
})
export default class UpperCaseDirectove {
    constructor(elem) {
        this.elem = elem;
    }

    onUpdate() {
        this.toUpperCase();
    }

    toUpperCase() {
        this.elem.innerHTML = this.elem.innerHTML.toUpperCase();
    }
}