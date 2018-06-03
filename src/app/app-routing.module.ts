import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// *******************************************************************************
// Layouts


// *******************************************************************************

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SliderComponent } from './layouts/slider/slider.component';
import { DealsComponent } from './layouts/deals/deals.component';
import { FeaturedProductsComponent } from './layouts/featured-products/featured-products.component';
import { PopularBrandsComponent } from './layouts/popular-brands/popular-brands.component';
import { ServicesComponent } from './layouts/services/services.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { AccountSettingsComponent } from './account/account-settings/account-settings.component';
import { AccountOrdersComponent } from './account/account-orders/account-orders.component';
import { AccountOffersComponent } from './account/account-offers/account-offers.component';
import { ProductItemComponent } from './product-item/product-item.component';


// *******************************************************************************
// Routes

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'login', component: SigninComponent},
  { path: 'product-list', component: ProductListComponent},
  { path: 'product-item', component: ProductItemComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'account-orders', component: AccountOrdersComponent},
  { path: 'account-offers', component: AccountOffersComponent},
  { path: 'account-settings', component: AccountSettingsComponent}
];

// *******************************************************************************
//

export const routingComponents = [
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    DealsComponent,
    FeaturedProductsComponent,
    PopularBrandsComponent,
    ServicesComponent,
    FooterComponent
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
  ]
})

export class AppRoutingModule {}