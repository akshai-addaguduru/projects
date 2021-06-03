import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {   // method to create a new product..also implemented in product-form.component
    return this.db.list('/products').push(product);     //pushing product into firebase which returns a promise..so we use return statement here
  }

  getAll() {    //method to view products added to firebase..also implemented 
    // this.db.list('/products').snapshotChanges();    //call the products object from firebase to view details...check admin-product.component..admin-products.component...
    // above way not working..below way works

    this.db.list('/products').valueChanges().subscribe(products => {
      console.log(products);
      products.forEach(products => { console.log(products) });
    });;    //call the products object from firebase to view details...check admin-product.component..admin-products.component

  }
}