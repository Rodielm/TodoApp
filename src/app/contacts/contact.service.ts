import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {
  constructor() {}

  getContact(): Observable<Contact[]> {
    return of(CONTACTS);
  }
}
