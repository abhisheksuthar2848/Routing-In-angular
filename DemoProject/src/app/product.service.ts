import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL:string ="api/";
  constructor(private httpclient: HttpClient) { }

  getProducts(){

    return this.httpclient.get(this.API_URL+'product')
  }


  getProduct(ProductId){
    return this.httpclient.get(`${this.API_URL+'products'}/${ProductId}`)
  }
}
