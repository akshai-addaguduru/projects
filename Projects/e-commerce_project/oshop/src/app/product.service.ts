import { Observable } from 'rxjs/internal/Observable';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  // create a product into the firebase DB
  create(product) {   // method to create a new product..also implemented in product-form.component
    this.db.list('/products').push(product).key;     //pushing product into firebase which returns a promise..so we use return statement here
  }

  // get all existing products from firebase 
  getAll() {    //method to view products added to firebase..also implemented 
    // this.db.list('/products').valueChanges();    //call the products object from firebase to view details...check admin-product.component..admin-products.component...
    // above way not working..doesn't display any data in the view page....below way works

    return this.db.list('/products/').snapshotChanges().pipe(
      map((actions: any[]) => actions.map(prod => {
        // console.log(products);
        const payload = prod.payload.val();                      // these snapshotchanges and pipe(map) should be added like this for new angular versions
        const key = prod.key;                                   // this was very tough to solve...this block copied from category.service
        return <any>{ key, ...payload };
      })));
  }

  // fetch a particular product ID to do the editing process
  get(productId) {
    return this.db.object('/products/' + productId);   // call this is the product-form.component
  }

  update(productId, product) {  // check product-form.component
    return this.db.object('/products/' + productId).update(product);    // get a productId and update that product -> code explanation...this method returns a promise
  }

  delete(productId) {
    return this.db.object('/products/' + productId).remove();
  }

}