import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CartComponent } from './components/cart/cart.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ItemInfoComponent } from './components/item-info/item-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    HomeComponent,
    InfoComponent,
    ContactsComponent,
    CartComponent,
    RegistrationComponent,
    ItemInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
