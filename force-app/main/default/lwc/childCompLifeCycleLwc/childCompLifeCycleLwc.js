import { LightningElement, api } from 'lwc';

export default class ChildCompLifeCycleLwc extends LightningElement {
    count = 0;
    @api message = 'default';
    
    constructor() {
        super();
        console.log('child constructor called: ' + this.count + ' ' + this.message);
    }

    connectedCallback() {
        console.log(
            'child connectedCallback: ' + 
            this.count + ' ' + 
            this.message + ' '
        );
    }

    renderedCallback(){
        console.log('Child rendered callback called');
        console.log(this.template.querySelector('lightning-button'));
    }

    handleClick() {
        this.count++;
        console.log('Button clicked: ' + this.count);
    }
}
