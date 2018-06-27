import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  baseUrl =  'https://private-b19a02-tagmove.apiary-mock.com/api/v1';

  constructor(private _http: HttpClient) { }

  getProducts(): any {
    return this._http.get(`${this.baseUrl}/products`)
  }

  getProductDetails(id): any {
    return this._http.get(`${this.baseUrl}/product/${id}`)
  }

  makeOffer(offerDetails): any {
    return this._http.post(`${this.baseUrl}/offer`, offerDetails);
  }
}
