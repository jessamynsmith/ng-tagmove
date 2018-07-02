import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  product: Product;
  offerForm: FormGroup;

  constructor(private productService: ProductService, private route: ActivatedRoute, private _fb: FormBuilder) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.productService.getProductDetails(+id)
      .subscribe(product => this.product = product)
    this.setupForm();
  }

  setupForm() {
    this.offerForm = this._fb.group({
      price: []
    });
  }

  makeOffer() {
    const offerDetails = this.offerForm.value
    offerDetails.productID = this.route.snapshot.paramMap.get('id');
    offerDetails.buyerID = "1234";
    offerDetails.timestamp = new Date();
    console.log(offerDetails);
    this.productService.makeOffer(offerDetails).subscribe(response => {
      console.log(response);
    }, (error) => {
      console.log(error);
    })
    console.log('form submited')
  }

}
