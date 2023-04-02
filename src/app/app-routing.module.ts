import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { AdultclothingComponent } from './shop/adultclothing/adultclothing.component';
import { FlasksComponent } from './shop/flasks/flasks.component';
import { KidsclothingComponent } from './shop/kidsclothing/kidsclothing.component';
import { MugsComponent } from './shop/mugs/mugs.component';
import { NotebooksComponent } from './shop/notebooks/notebooks.component';
import { ShopallComponent } from './shop/shopall/shopall.component';
import { WaterbottlesComponent } from './shop/waterbottles/waterbottles.component';

const routes: Routes = [
  {path: 'cart', component:CartComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'shop', component:ShopComponent},
  {path: 'adultsclothing', component:AdultclothingComponent},
  {path: 'flasks', component:FlasksComponent},
  {path: 'kidsclothing', component:KidsclothingComponent},
  {path: 'mugs', component:MugsComponent},
  {path: 'notebooks', component:NotebooksComponent},
  {path: 'shopall', component:ShopallComponent},
  {path: 'waterbottles', component:WaterbottlesComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
