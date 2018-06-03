import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent, 
    routingComponents, 
    SigninComponent , 
    ProductListComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
