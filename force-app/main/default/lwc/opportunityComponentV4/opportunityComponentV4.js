import { LightningElement, wire } from 'lwc';
import getAllOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities';
import deleteOpportunity from '@salesforce/apex/OpportunityController.deleteOpportunity';
//import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import {_toastMessage} from 'c/utility';

export default class OpportunityComponentV4 extends LightningElement {
    @wire(getAllOpportunities) opportunityService;
    columnList = [{
        label: 'Opportunity Name', 
        fieldName: 'Name',
        type: 'text' },
    {
        label: 'Stage', 
        fieldName: 'StageName',
        type: 'text'
    },
    {
        label: 'Close Date', 
        fieldName: 'CloseDate',
        type: 'Date'
    },
    {
        label: 'Amount', 
        fieldName: 'Amount',
        type: 'Currency'
    }];

    oppId;
    showDelete = false;
    handleClick(){
        deleteOpportunity({ recordId: this.oppId })
            .then(() => {
                //alert('Deal has been deleted successfully');
                /*const eventRef = new ShowToastEvent({
                    title: 'COMPLETE',
                    message: 'Deal has been deleted successfully',
                    variant: 'success'
                });
                this.dispatchEvent(eventRef);*/
                _toastMessage(
                    this, 
                    'COMPLETED', 
                    'Deal has been deleted successfully', 
                    'success'
                );
                const ldtRef = this.template.querySelector('lightning-datatable');
                ldtRef.selectedRows = [];
                refreshApex(this.opportunityService);
            })
            .catch(error => {
                /*const eventRef = new ShowToastEvent({
                    title: 'INCOMPLETE',
                    message: 'Deal cannot be deleted',
                    variant: 'error'
                });
                this.dispatchEvent(eventRef);*/
                _toastMessage(
                    this, 
                    'INCOMPLETE', 
                    'Deal cannot be deleted', 
                    'error'
                );
            });
    }
    handleRowSelection(event){
        const rows = event.detail.selectedRows;
        if(rows.length > 0){
            this.oppId = rows[0].Id;
            alert('Selected Record Id: ' + this.oppId);
            this.showDelete = true;
        }
    }
}