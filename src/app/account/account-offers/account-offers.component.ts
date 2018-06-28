import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Offer } from '../../models/offer';

@Component({
  selector: 'app-account-offers',
  templateUrl: './account-offers.component.html',
  styleUrls: ['./account-offers.component.css']
})
export class AccountOffersComponent implements OnInit {
offers: Offer;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    var requestObj = {buyerID:"1234", status:"open"}
    var requestJson = JSON.stringify(requestObj);

    this.productService.getOffers(requestJson)
    .subscribe(offers => this.offers = offers)
  }

}
