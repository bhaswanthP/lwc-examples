public with sharing class OpportunityController {
    @AuraEnabled(cacheable = true)
    public static List<Opportunity> getAllOpportunities(){
        
        return [SELECT 
                    Name, StageName, CloseDate, Amount
                FROM
                    Opportunity
                WITH 
                    SECURITY_ENFORCED
                ];
    }

    @AuraEnabled(cacheable = true)
    public static List<Opportunity> getWonOpportunities(){
        
        return [SELECT 
                    Name, StageName, CloseDate, Amount
                FROM
                    Opportunity
                WHERE
                    Stagename = 'Closed Won'
                WITH 
                    SECURITY_ENFORCED
                ];
    }

    @AuraEnabled(cacheable = true)
    public static List<Opportunity> getLostOpportunities(){
        
        return [SELECT 
                    Name, StageName, CloseDate, Amount
                FROM
                    Opportunity
                WHERE
                    Stagename = 'Closed Lost'
                WITH 
                    SECURITY_ENFORCED
                ];
    }

    @AuraEnabled
    public static void deleteOpportunity(String recordId){
            Opportunity opp = [SELECT Name FROM Opportunity WHERE Id = :recordId];
            delete opp;
    }
}