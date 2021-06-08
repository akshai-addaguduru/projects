import { Product } from './../../models/product';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { ProductService } from './../../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];    // this is a backup array for products.....defined as an interface in product.ts in the model folder
  filteredProducts: any[];    // this is an array that has products in it for filtering....this is what we use to view products..check 'admin-products.com.html'
  subscription: Subscription;   // for onDestroy method
  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()  // here getAll() is an observable..so we use products$ as to call an observable..declare on top class
      .subscribe(products => this.filteredProducts = this.products = products);  // here we tally filtered products to products which is all firebase products...
  }

  filter(query: string) {
    // console.log(query);
    this.filteredProducts = (query) ?   //query here means when user types something...we apply filter here on the array of products
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :  // arrow function will iterate over array..each time a product is returned from the array...
        this.products;  //if we delete from search, we simply return products .. ':' here means if-else condition...toLowercase here helps in avoiding case sensitivity
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void { }
}
