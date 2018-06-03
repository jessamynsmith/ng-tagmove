import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { AccountSettingsComponent } from './account/account-settings/account-settings.component';
import { AccountOrdersComponent } from './account/account-orders/account-orders.component';
import { AccountOffersComponent } from './account/account-offers/account-offers.component';
import { AccountNavComponent } from './account/account-nav/account-nav.component';


@NgModule({
  declarations: [
    AppComponent, 
    routingComponents, 
    SigninComponent , 
    ProductListComponent, 
    AboutComponent, 
    ContactComponent, 
    FaqComponent, 
    AccountSettingsComponent, 
    AccountOrdersComponent, 
    AccountOffersComponent, AccountNavComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
