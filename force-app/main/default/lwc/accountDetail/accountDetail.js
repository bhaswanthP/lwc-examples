import { LightningElement, wire } from 'lwc';
//LMS: 1
import { MessageContext, subscribe } from 'lightning/messageService';
//LMS: 2
import ASC from '@salesforce/messageChannel/AccountSearchChannel__c';

import BILLING_CITY from '@salesforce/schema/Account.BillingCity';
import BILLING_STATE from '@salesforce/schema/Account.BillingState';
import BILLING_COUNTRY from '@salesforce/schema/Account.BillingCountry';

export default class AccountDetail extends LightningElement {
    accId;
    city = BILLING_CITY;
    state = BILLING_STATE;
    country = BILLING_COUNTRY;
    @wire(MessageContext) msgCtx;
    //LMS: 4
    connectedCallback(){
        subscribe(this.msgCtx, ASC, (message) => {
            this.accId = message.recordId;
        });
    }
}