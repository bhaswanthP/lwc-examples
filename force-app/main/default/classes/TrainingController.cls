public with sharing class TrainingController {
    @AuraEnabled
    public static String addTraining(String trainerName, String POC, String trainingName, String trainingId, Date startDate){
        Training__c training = new Training__c();
        training.Trainer_Name__c = trainerName;
        training.POC__c = POC;
        training.Name = trainingName;
        training.Training_Id__c = trainingId;
        training.Start_Date__c = startDate;
        insert training;
        return 'Added';
    }
}

//Savepoint sp = Database.setSavepoint();
//Database.rollback(sp);
//template, email alerts, rtflow