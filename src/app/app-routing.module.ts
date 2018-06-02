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



// *******************************************************************************
// Routes

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'login', component: SigninComponent}
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