import { LightningElement } from 'lwc';

export default class VerticalNavigationDemo extends LightningElement {
    handleSelect(event){
        const itemName = event.detail.name;
        //alert('Selected Item: ' + itemName);
        const eventRef = new CustomEvent('navigation', { detail: itemName });
        this.dispatchEvent(eventRef);
    }
}