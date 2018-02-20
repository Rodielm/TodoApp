import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// //in memory web api
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import{ InMemoryDataService } from './in-memory-data-service';
// services
import { ContactService } from './contacts/contact.service';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ContactService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
