import { LightningElement, wire } from 'lwc';
import findAccountList from '@salesforce/apex/AccountController.findAccountList';
//LMS:1
import { publish, MessageContext } from 'lightning/messageService';
//LMS:2
import ASC from '@salesforce/messageChannel/AccountSearchChannel__c';

export default class AccountSearchResult extends LightningElement {
    searchText = '';
    accList;
    //LMS:3
    //Provides information about the lightning web component that is using the lightning message service
    @wire(MessageContext) msgCtx;
    handleSearch(event) {
        this.searchText = event.detail;
        console.log(this.searchText);
    }

    @wire(findAccountList, { accountName: '$searchText' }) 
    showResult({ data, error }) {
        if (data) 
            this.accList = data;
    }
    handleClick(event){
        const trRef = event.currentTarget;
        const recordId = trRef.getAttribute('data-id');
        alert('Clicked Item Id: ' + recordId);
        //LMS:4
        publish(this.msgCtx, ASC, { recordId });
    }
}
