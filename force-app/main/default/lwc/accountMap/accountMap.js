import { LightningElement, api, wire  } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import CITY from '@salesforce/schema/Account.BillingCity';
import COUNTRY from '@salesforce/schema/Account.BillingCountry';
import STATE from '@salesforce/schema/Account.BillingState';
import NAME from '@salesforce/schema/Account.Name';
const FIELDS = [CITY, COUNTRY, STATE];

export default class AccountMap extends LightningElement {
    @api accountId;
    accountMapMarkers;
    /*
    connectedCallback(){
        this.accountMapMarkers = [
            {   
                location: {
                    City: 'Noida',
                    State: 'Uttar Pradesh',
                    Country: 'India',
                },
                title: 'Accenture DDC4'
            },
        ];
    }
    */
    @wire(getRecord, { recordId: '$accountId', fields: FIELDS })
    loadData({data, error}){
        if(data)
            this.accountMapMarkers = [
                {
                    location: {
                        City: getFieldValue(data, CITY),
                        State: getFieldValue(data, STATE),
                        Country: getFieldValue(data, COUNTRY),
                    },
                    title: getFieldValue(data, NAME),
                    description: `You are viewing Information for ${getFieldValue(data, CITY)}`
                }
            ];
    }
}