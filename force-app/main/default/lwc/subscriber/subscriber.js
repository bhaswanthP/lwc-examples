import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class Subscriber extends LightningElement {
    received = '';

    connectedCallback() {
        pubsub.register('messageevent', this.handleMessage.bind(this));
    }

    disconnectedCallback() {
        pubsub.unregister('messageevent', this.handleMessage.bind(this));
    }

    handleMessage(payload) {
        this.received = payload.text;
    }
}
