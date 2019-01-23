import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CartComponent } from './components/cart/cart.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ItemInfoComponent } from './components/item-info/item-info.component';
import { AccountComponent } from './components/account/account.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { DialogproductsComponent } from './components/dialogproducts/dialogproducts.component';
import { DialogcategoriesComponent } from './components/dialogcategories/dialogcategories.component';
import { CartListItemComponent } from './components/cart-list-item/cart-list-item.component';
import {FormsModule} from "@angular/forms";

import { DialogordersComponent } from './components/dialogorders/dialogorders.component';
import { EmptyorderComponent } from './components/emptyorder/emptyorder.component';
import { DialoguserinfoComponent } from './components/dialoguserinfo/dialoguserinfo.component';
import { DialoginfoorderComponent } from './components/dialoginfoorder/dialoginfoorder.component';
import {CustomHttpInterceptor} from './services/interceptors/CustomHttpInterceptor';


@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    HomeComponent,
    InfoComponent,
    ContactsComponent,
    CartComponent,
    RegistrationComponent,
    ItemInfoComponent,
    AccountComponent,
    DialogproductsComponent,
    DialogcategoriesComponent,
    CartListItemComponent,
    DialogordersComponent,
    EmptyorderComponent,
    DialoguserinfoComponent,
    DialoginfoorderComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
