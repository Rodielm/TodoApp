import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  // contact: Contact = {
  //   id: 1,
  //   name: 'Rodiel'
  // };

  contacts = CONTACTS;

  selectedContact: Contact;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.getContact();
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
    console.log(contact);
  }

  getContact(): void {
  this.contactService.getContact()
  .subscribe(contacts => this.contacts = contacts);
  }

}
