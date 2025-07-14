public with sharing class CountryController {
    @AuraEnabled
    public static void updateUserCountry(String selectedCountry) {
        //System.debug(Account.Country__c.getDescribe().getPickListValues());
        /*Schema.DescribeFieldResult fieldResult = User.Country.getDescribe();
        List<Schema.PicklistEntry> entries = fieldResult.getPicklistValues();

        Set<String> countries = new Set<String>();
        for (Schema.PicklistEntry entry : entries) {
            countries.add(entry.getValue());
        }

        String countryToSet = countries.contains(selectedCountry) ? selectedCountry : '';*/
        /*System.debug(selectedCountry);
        User u = [SELECT Id, Name, Country, Username FROM User WHERE Username = 'bhaswanth0526@gmail.com' LIMIT 1];
        System.debug(u.Username + u.Name);
        u.Country = selectedCountry;
        update u;*/
        
        List<Schema.PicklistEntry> entries = Account.Country__c.getDescribe().getPicklistValues();

        Set<String> countries = new Set<String>();
        for (Schema.PicklistEntry entry : entries) {
            countries.add(entry.getValue());
        }
		System.debug(countries.contains(selectedCountry) + '-------');
        String countryToSet = countries.contains(selectedCountry) ? selectedCountry : '';
        Account account = [SELECT Id, Name, Country__c FROM Account WHERE Name = 'SampleAccount3' LIMIT 1];
        account.Country__c = countryToSet;
        update account;
    }
}