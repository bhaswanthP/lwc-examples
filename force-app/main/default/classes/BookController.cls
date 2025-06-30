public with sharing class BookController {
    @AuraEnabled(cacheable = true)
    public static List<Book__c> getAllBooks(){
        
        return [SELECT 
                    Book_Title__c, Category__c, Author__c, Stock_Available__c
                FROM
                    Book__c
                WITH 
                    SECURITY_ENFORCED
                ];
    }
}