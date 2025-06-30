import { LightningElement, api, wire } from 'lwc';

export default class AccountLayout extends LightningElement {
    selectedItem;
    handleNavigation(event){
        this.selectedItem = event.detail;
        alert('Selected Item: ' + this.selectedItem);
    }
    get isSearch(){
        return this.selectedItem === 'search';
    }
    get isCalc(){
        return this.selectedItem === 'calc';
    }
    get isDeal(){
        return this.selectedItem === 'deal';
    }
}