import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { FaqComponent } from './faq/faq.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ShopallComponent } from './shop/shopall/shopall.component';
import { KidsclothingComponent } from './shop/kidsclothing/kidsclothing.component';
import { AdultclothingComponent } from './shop/adultclothing/adultclothing.component';
import { FlasksComponent } from './shop/flasks/flasks.component';
import { WaterbottlesComponent } from './shop/waterbottles/waterbottles.component';
import { MugsComponent } from './shop/mugs/mugs.component';
import { GlassesComponent } from './shop/glasses/glasses.component';
import { NotebooksComponent } from './shop/notebooks/notebooks.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    FaqComponent,
    ContactusComponent,
    SearchComponent,
    LoginComponent,
    CartComponent,
    ShopallComponent,
    KidsclothingComponent,
    AdultclothingComponent,
    FlasksComponent,
    WaterbottlesComponent,
    MugsComponent,
    GlassesComponent,
    NotebooksComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
