import { LightningElement, api } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    message = 'Calculator Example';
    @api firstNumber = 23;
    @api secondNumber = 15;
    showBadge = false;
    result;
    handleAddEvent(){
        this.showBadge = true;
        this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }
    handleFirstNumber(){
        this.firstNumber = event.target.value;
    }
    handleSecondNumber(){
        this.secondNumber = event.target.value;
    }
    sub(){
        this.showBadge = true;
        this.result = this.firstNumber - this.secondNumber;
    }
    mul(){
        this.showBadge = true;
        this.result = this.firstNumber * this.secondNumber;
    }
    div(){
        this.showBadge = true;
        this.result = this.firstNumber / this.secondNumber;
    }
}