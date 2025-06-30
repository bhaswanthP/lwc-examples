import { LightningElement, wire } from 'lwc';
import getOpportunitiesGreaterThan50000 from '@salesforce/apex/OpportunityAmountController.getOpportunitiesGreaterThan50000';

export default class OpportunityAmountCheckBoxChange extends LightningElement {
    @wire(getOpportunitiesGreaterThan50000) opportunityService;
}