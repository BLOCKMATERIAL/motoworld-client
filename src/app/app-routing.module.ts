import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { InfoComponent } from './components/info/info.component';
import { ItemInfoComponent } from './components/item-info/item-info.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import {DialogproductsComponent} from "./components/dialogproducts/dialogproducts.component";
import {DialogcategoriesComponent} from "./components/dialogcategories/dialogcategories.component";
import {EmptyorderComponent} from "./components/emptyorder/emptyorder.component";
import {DialoguserinfoComponent} from "./components/dialoguserinfo/dialoguserinfo.component";
import {DialoginfoorderComponent} from "./components/dialoginfoorder/dialoginfoorder.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'info', component: InfoComponent },
  { path: 'item-info/:currentItemId', component: ItemInfoComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products/:id', component: DialogproductsComponent},
  { path: 'categories/:id', component: DialogcategoriesComponent},
  { path: 'account', component: AccountComponent},
  { path: 'emptyorder', component: EmptyorderComponent},
  { path: 'dialoguseinfo', component: DialoguserinfoComponent},
  { path: 'dialoginfoorder', component: DialoginfoorderComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
