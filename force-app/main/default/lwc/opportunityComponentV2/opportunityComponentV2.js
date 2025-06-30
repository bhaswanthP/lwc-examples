import { LightningElement, wire } from 'lwc';
import getAllOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities';

export default class OpportunityComponentV2 extends LightningElement {
    oppList;
    @wire(getAllOpportunities)
    loadAllOpportunity({ data, error }){
        if(data){
            this.oppList = [];
            data.forEach(opp => {
                const obj = {
                    RecordId: opp.Id,
                    OpportunityName: opp.Name,
                    Stage: opp.StageName,
                    CloseDate: opp.CloseDate,
                    Amount: opp.Amount,
                    Commission: opp.Amount * 0.2
                };
                this.oppList.push(obj);
            });
        }
    }
}