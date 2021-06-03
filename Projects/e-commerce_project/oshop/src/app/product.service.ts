import { Observable } from 'rxjs/internal/Observable';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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

    // this.db.list('/products').valueChanges().subscribe(products => {
    //   console.log(products);
    //   products.forEach(products => { console.log(products) });
    // });;    //this doesn't render view...but perfectly shows details in the console

    // return this.db.list('/products').snapshotChanges().pipe(
    //   map((products: any[]) => products.map(prod => {
    //     console.log(products);
    //     const payload = prod.payload.val();                                       // these snapshotchanges and pipe(map) should be added like this for new angular versions
    //     const key = prod.key;
    //     return <any>{ key, ...payload };
    //   })));

    return this.db.list('/products').snapshotChanges().pipe(
      map((products: any[]) => products.map(prod => {
        console.log(products);
        const payload = prod.payload.val();                                       // these snapshotchanges and pipe(map) should be added like this for new angular versions
        const key = prod.key;
        return <any>{ key, ...payload };
      })));

  }
}