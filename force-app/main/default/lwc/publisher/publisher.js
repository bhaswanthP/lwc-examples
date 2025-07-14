import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class Publisher extends LightningElement {
    message = '';

    handleChange(event) {
        this.message = event.target.value;
    }

    handleSend() {
        pubsub.fire('messageevent', { text: this.message });
        this.message = '';
    }
}
