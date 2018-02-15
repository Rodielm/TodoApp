import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts/contact';
import { ContactService } from '../contacts/contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContact()
      .subscribe(contacts => this.contacts = contacts.slice(1, 5));
  }

}