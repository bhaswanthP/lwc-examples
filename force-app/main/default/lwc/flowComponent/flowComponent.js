import { LightningElement } from 'lwc';

export default class FlowComponent extends LightningElement {
    firstName;
    lastName;
    flowVariables;
    isShowFlow = false;

    handleClick() {
        this.firstName = this.template.querySelector('lightning-input[data-name="fName"]').value;
        this.lastName = this.template.querySelector('lightning-input[data-name="lName"]').value;
        //alert(this.firstName + ' ' + this.lastName);
        this.flowVariables = [
            {
                name: 'firstName',
                type: 'String',
                value: this.firstName,
            },
            {
                name: 'lastName',
                type: 'String',
                value: this.lastName,
            }
        ];
        this.isShowFlow = true;
    }

    handleChangeStatus(event) {
        if (event.detail.status?.toLowerCase() == 'finished') {
            this.isShowFlow = false;
            this.template.querySelector('lightning-input[data-name="fName"]').value = '';
            this.template.querySelector('lightning-input[data-name="lName"]').value = '';
        }
    }
}
