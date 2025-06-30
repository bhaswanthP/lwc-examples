import { LightningElement } from 'lwc';

export default class ModernJSComponent extends LightningElement {
    todayDateTime = new Date();
    updateDateTimeUsingCalling(){
        setInterval(function(){
            this.todayDateTime = new Date();
        }, 1000);
    }
    updateDateTimeUsingLocalVariable(){
        let localThis = this;
        setInterval(function(){
            localThis.todayDateTime = new Date();
        }, 1000);
    }
    updateDateTimeUsingBind(){
        setInterval(function(){
            localThis.todayDateTime = new Date();
        }.bind(this), 1000);
    }
    updateDateTimeUsingArrow(){
        setInterval(() => {
            this.todayDateTime = new Date();
        }, 1000);
    }
}