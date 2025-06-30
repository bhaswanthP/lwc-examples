public with sharing class PositionController {
    @AuraEnabled(cacheable = true)
    public static List<Position__c> getAllPositions(){
        
        return [SELECT 
                    Title__c, Status__c
                FROM
                    Position__c
                WITH 
                    SECURITY_ENFORCED
                ];
    }
}