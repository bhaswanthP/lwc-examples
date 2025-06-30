import { LightningElement, track } from 'lwc';
import addTraining from '@salesforce/apex/TrainingController.addTraining';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AddNewTraining extends LightningElement {
    @track trainerName = '';
    @track POC = '';
    @track startDate = '';
    @track trainingId = '';
    @track trainingName = '';

    handleTrainerName(event){
        this.trainerName = event.target.value;
    }

    handleTrainingName(event){
        this.trainingName = event.target.value;
    }

    handlePOC(event){
        this.POC = event.target.value;
    }

    handleTrainingId(event){
        this.trainingId = event.target.value;
    }

    handleStartDate(event){
        this.startDate = event.target.value;
    }

    handleAddTraining(){
        addTraining({
            trainerName: this.trainerName, 
            POC: this.POC, 
            startDate: this.startDate, 
            trainingId: this.trainingId, 
            trainingName: this.trainingName
        })
        .then(result => {
            this.showToast('Success', 'Training added successfully!', 'success');
            this.resetForm();
        })
        .catch(error => { 
            this.showToast('Error', 'Error adding training: ' + error.body.message, 'error'); 
        });
    }

    showToast(title, message, variant) { 
        const event = new ShowToastEvent({ 
            title: title, 
            message: message, 
            variant: variant, 
        }); 
        this.dispatchEvent(event);
    }
    resetForm() { 
        this.trainerName = ''; 
        this.POC = ''; 
        this.startDate = ''; 
        this.trainingId = ''; 
        this.trainingName = ''; 
        this.template.querySelectorAll('lightning-input').forEach(input => { 
            input.value = ''; 
        });
    }
}