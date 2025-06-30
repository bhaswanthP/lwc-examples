import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {
    message;
    handleDemo(){
        this.message = event.detail;
    }
}