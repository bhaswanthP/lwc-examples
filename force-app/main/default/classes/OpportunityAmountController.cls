public with sharing class OpportunityAmountController {
    @AuraEnabled(cacheable = true)
    public static List<Opportunity> getOpportunitiesGreaterThan50000(){
        
        return [SELECT 
                    Name, AccountId, Amount, StageName, CloseDate
                FROM
                    Opportunity
                WHERE
                    Amount > 50000];
    }
}