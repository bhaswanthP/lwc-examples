import { LightningElement } from 'lwc';

export default class Child extends LightningElement {
    handleClick(){
        const eventRef = new CustomEvent('demo', { composed: true, bubbles: true, detail: 'Child Message' });
        this.dispatchEvent(eventRef);
    }
}