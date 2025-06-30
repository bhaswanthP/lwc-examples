import { LightningElement } from 'lwc';
import getWonOpportunities from '@salesforce/apex/OpportunityController.getWonOpportunities';
import getLostOpportunities from '@salesforce/apex/OpportunityController.getLostOpportunities';

export default class OpportunityComponentV3 extends LightningElement {
    oppList = []; // Initialize oppList to avoid undefined errors

    loadWonDeals() {
        getWonOpportunities()
            .then(result => {
                this.oppList = result.map(opp => ({
                    RecordId: opp.Id,
                    OpportunityName: opp.Name,
                    Stage: opp.StageName,
                    CloseDate: opp.CloseDate,
                    Amount: opp.Amount,
                    Commission: opp.Amount * 0.2
                }));
            })
            .catch(issue => {
                alert('Error: ' + issue.body.message);
            });
    }

    loadLostDeals() {
        getLostOpportunities()
            .then(result => {
                this.oppList = result.map(opp => ({
                    RecordId: opp.Id,
                    OpportunityName: opp.Name,
                    Stage: opp.StageName,
                    CloseDate: opp.CloseDate,
                    Amount: opp.Amount,
                    Commission: opp.Amount * 0.2
                }));
            })
            .catch(issue => {
                alert('Error: ' + issue.body.message);
            });
    }
}
