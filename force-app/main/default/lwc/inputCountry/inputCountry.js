import { LightningElement, track, api } from 'lwc';
import AllowedCountries from '@salesforce/label/c.AllowedCountries';
import updateUserCountry from '@salesforce/apex/CountryController.updateUserCountry';

export default class inputCountry extends LightningElement {
  @track selectedCountry = '';
  @track showError = false;
  @track countryOptions = [];

  @api recordId;

  connectedCallback() {
    const allowed = AllowedCountries.split(';');
    this.countryOptions = allowed.map(c => ({ label: c, value: c }));
  }

  handleChange(event) {
    const value = event.detail.value;
    const isAllowed = this.countryOptions.some(opt => opt.value === value);

    this.showError = !isAllowed;
    this.selectedCountry = isAllowed ? value : '';
    console.log(this.selectedCountry);
  }

  handleSave() {
    updateUserCountry({ selectedCountry: this.selectedCountry })
      .then(() => {
        console.log('Country saved');
      })
      .catch(error => {
        console.error('Save failed', error);
      });
  }

  get isSaveDisabled() {
    return false; // this.showError || this.selectedCountry === '';
  }
}
