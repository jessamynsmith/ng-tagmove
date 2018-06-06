import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// *******************************************************************************
// Layouts


// *******************************************************************************

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SliderComponent } from './home/slider/slider.component';
import { DealsComponent } from './home/deals/deals.component';
import { FeaturedProductsComponent } from './home/featured-products/featured-products.component';
import { PopularBrandsComponent } from './home/popular-brands/popular-brands.component';
import { PromisesComponent } from './home/promises/promises.component';
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
import { ProductListAltComponent } from './product-list-alt/product-list-alt.component';
import { AddressPageComponent } from './checkout/address-page/address-page.component';
import { ShippingPageComponent } from './checkout/shipping-page/shipping-page.component';
import { PaymentPageComponent } from './checkout/payment-page/payment-page.component';
import { ReviewPageComponent } from './checkout/review-page/review-page.component';
import { CompletePageComponent } from './checkout/complete-page/complete-page.component';

// *******************************************************************************
// Routes

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'login', component: SigninComponent},
  { path: 'product-list', component: ProductListComponent},
  { path: 'product-list-alt', component: ProductListAltComponent},
  { path: 'product-item/:id', component: ProductItemComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'account-orders', component: AccountOrdersComponent},
  { path: 'account-offers', component: AccountOffersComponent},
  { path: 'account-settings', component: AccountSettingsComponent},
  { path: 'address-page', component: AddressPageComponent},
  { path: 'shipping-page', component: ShippingPageComponent},
  { path: 'payment-page', component: PaymentPageComponent},
  { path: 'review-page', component: ReviewPageComponent},
  { path: 'complete-page', component: CompletePageComponent}
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
    PromisesComponent,
    FooterComponent
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
  ]
})

export class AppRoutingModule {}