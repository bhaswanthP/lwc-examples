import { LightningElement } from 'lwc';

export default class ParentComp_LIFECYCLE_LWC extends LightningElement {
    constructor(){
        super();
        console.log('Parent Constructor Called');
    }

    connectedCallback(){
        console.log('Parent Connected Callback Called');
        console.log(this.template.querySelector('c-child-comp-life-cycle-lwc'));
    }

    renderedCallback(){
        console.log('Parent Rendered Callback Called');
        console.log(this.template.querySelector('c-child-comp-life-cycle-lwc'));
    }
}