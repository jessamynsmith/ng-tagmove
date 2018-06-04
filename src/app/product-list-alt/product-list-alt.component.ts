import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list-alt',
  templateUrl: './product-list-alt.component.html',
  styleUrls: ['./product-list-alt.component.css']
})
export class ProductListAltComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products: object[] = [];

  ngOnInit() {
    this.productService.getProducts()
    .subscribe(products => this.products = products)
  }

}
