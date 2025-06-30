import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    message;
    handleDemo(){
        this.message = event.detail;
    }
}