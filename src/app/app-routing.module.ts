import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { InfoComponent } from './components/info/info.component';
import { ItemInfoComponent } from './components/item-info/item-info.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'info', component: InfoComponent },
  { path: 'item-info', component: ItemInfoComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'cart', component: CartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
