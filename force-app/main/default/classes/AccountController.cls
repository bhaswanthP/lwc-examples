public with sharing class AccountController {
    @AuraEnabled(cacheable = true)
    public static List<Account> findAccountList(String accountName){
        String searchText = '%' + accountName + '%';
        return [SELECT Name, Type, Industry 
                FROM Account 
                WHERE name like :searchText 
                WITH SECURITY_ENFORCED];
    }
}
