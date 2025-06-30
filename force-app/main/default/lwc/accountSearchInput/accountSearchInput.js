import { LightningElement } from 'lwc';

export default class AccountSearchInput extends LightningElement {
    handleChange(event) {
        const searchInput = event.target.value;
        const eventRef = new CustomEvent('search', { detail: searchInput });
        this.dispatchEvent(eventRef);
    }
}
