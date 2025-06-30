trigger OpportunityTrigger on Opportunity (before delete) {
    if (Trigger.isBefore && Trigger.isDelete) {
        for (Opportunity opp : Trigger.old) {
            if (opp.StageName == 'Closed Won') {
                opp.addError('Closed Won deal cannot be deleted');
            }
        }
    }
}
