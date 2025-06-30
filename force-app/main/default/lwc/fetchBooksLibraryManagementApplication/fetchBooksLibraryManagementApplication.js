import { LightningElement, wire } from 'lwc';
import getAllBooks from '@salesforce/apex/BookController.getAllBooks';

export default class FetchBooksLibraryManagementApplication extends LightningElement {
    @wire(getAllBooks) bookService;
}