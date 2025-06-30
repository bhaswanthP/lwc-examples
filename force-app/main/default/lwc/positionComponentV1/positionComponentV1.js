import { LightningElement, wire } from 'lwc';
import getAllPositions from '@salesforce/apex/PositionController.getAllPositions';
export default class PositionComponentV1 extends LightningElement {
    @wire(getAllPositions) positionService;
}