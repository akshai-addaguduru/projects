import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$;    //any varibale with a $ sign is always an observable
  products: any[];

  constructor(private productService: ProductService, db: AngularFireDatabase) {
    this.products$ = this.productService.getAll();      // here getAll() is an observable..so we use products$ as to call an observable..declare on top class

    // this.productService.snapshotChanges().subscribe(action => {
    //   const data = action.payload.val();
    //   console.log(action.payload.val());
    //   return { ...data };
    //   });

  }



  ngOnInit(): void { }
}
