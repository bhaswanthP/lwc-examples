import { LightningElement, wire } from 'lwc';
import getAllOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities';
export default class OpportunityComponentV1 extends LightningElement {
    @wire(getAllOpportunities) opportunityService;
}