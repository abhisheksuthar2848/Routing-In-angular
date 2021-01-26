import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(){

    let product=[
      {id:1,name:'product1'},
      {id:2,name:'product2'},
      {id:3,name:'product3'},
      {id:4,name:'product4'},
      {id:5,name:'product5'},
      {id:6,name:'product6'},
      
    ]
    return {product};
  }
}
