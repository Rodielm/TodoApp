import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { MessageService } from '../messages/message.service';

@Injectable()
export class ContactService {
  constructor(private messageService: MessageService) {}

  getContact(): Observable<Contact[]> {
    this.messageService.add('ContactService: fetched Contacts');
    return of(CONTACTS);

  }
}
